package io.tiny.insta.tinyinstagram.services;

import io.tiny.insta.tinyinstagram.entities.UserEntity;
import io.tiny.insta.tinyinstagram.exceptions.UnknowUsernameException;
import io.tiny.insta.tinyinstagram.exceptions.UsernameExistsException;
import io.tiny.insta.tinyinstagram.exceptions.UsernameOrPasswordKoException;
import io.tiny.insta.tinyinstagram.exceptions.UsernameOrTokenKoException;
import io.tiny.insta.tinyinstagram.repositories.UserRepository;
import io.tiny.insta.tinyinstagram.services.io_user.*;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void createUser(CreateUserServiceInput createUserServiceInput) throws UsernameExistsException {
        UserEntity repositoryInput = new UserEntity(
                createUserServiceInput.getUsername(),
                createUserServiceInput.getPassword(),
                createUserServiceInput.getEmail(),
                System.currentTimeMillis()+"",
                null);
        List<UserEntity> resultFromDB = userRepository.findByUsername(createUserServiceInput.getUsername());
        if( resultFromDB == null || ( resultFromDB != null && resultFromDB.size() == 0 ) ){
            userRepository.save(repositoryInput);
        }
        else{
            throw new UsernameExistsException();
        }
    }

    @Override
    public String generateToken() {
        UUID uuid = UUID.randomUUID();
        String randomUUIDString = uuid.toString();
        return randomUUIDString;
    }

    @Override
    public CheckTokenServiceOutput checkToken(CheckTokenServiceInput checkTokenServiceInput) {
        CheckTokenServiceOutput checkTokenServiceOutput = new CheckTokenServiceOutput();
        List<UserEntity> resultFromDB = userRepository
                .findByUsernameAndToken(
                        checkTokenServiceInput.getUsername(),
                        checkTokenServiceInput.getToken()
                );
        if( resultFromDB!=null && resultFromDB.size() == 1 ){
            checkTokenServiceOutput.setConnected(true);
        }
        else{
            checkTokenServiceOutput.setConnected(false);
        }
        return checkTokenServiceOutput;
    }

    @Override
    public FindUserServiceOutput findUser(FindUserServiceInput findUserServiceInput) throws UsernameOrTokenKoException, UnknowUsernameException {
        FindUserServiceOutput findUserServiceOutput = new FindUserServiceOutput();
        List<UserEntity> userEntity = userRepository.findByUsernameAndToken(findUserServiceInput.getUsername(),
                findUserServiceInput.getToken());
        List<UserEntity> userEntityToFind = userRepository.findByUsername(findUserServiceInput.getUserToSearch());
        if( userEntity != null && userEntity.size() == 1 ) {
            if( userEntityToFind!=null && userEntityToFind.size()==1 ) {
                findUserServiceOutput.setUserEntity(userEntityToFind.get(0));
            }
            else{
                throw new UnknowUsernameException();
            }
        }
        else{
            throw new UsernameOrTokenKoException();
        }
        return findUserServiceOutput;
    }

    @Override
    public ConnectUserServiceOutput connectUser(ConnectUserServiceInput connectUserServiceInput) throws UsernameOrPasswordKoException {
        List<UserEntity> userEntity = userRepository.findByUsernameAndPassword(connectUserServiceInput.getUsername(),
                connectUserServiceInput.getPassword());
        ConnectUserServiceOutput responseOutput = null;
        String tokenGenerated = generateToken();
        if(userEntity!=null && userEntity.size()==1){
            userEntity.get(0).setToken(tokenGenerated);
            userRepository.save(userEntity.get(0));
            responseOutput = new ConnectUserServiceOutput(userEntity.get(0).getUsername(), userEntity.get(0).getToken());
        }
        else{
            throw new UsernameOrPasswordKoException();
        }
        return responseOutput;
    }

    @Override
    public DisconnectUserServiceOutput disconnectUser(DisconnectUserServiceInput disconnectUserServiceInput) {
        DisconnectUserServiceOutput disconnectResponse = new DisconnectUserServiceOutput();
        List<UserEntity> userEntityOptional = userRepository
                .findByUsernameAndToken(
                        disconnectUserServiceInput.getUsername(),
                        disconnectUserServiceInput.getToken()
                );
        if(userEntityOptional != null && userEntityOptional.size()==1){
            userEntityOptional.get(0).setToken(null);
            userRepository.save(userEntityOptional.get(0));
            disconnectResponse.setDisconnected(true);
        }
        else{
            disconnectResponse.setDisconnected(false);
        }
        return disconnectResponse;
    }

    @Override
    public CheckUsernameExistsServiceOutput checkUsernameExists(CheckUsernameExistsServiceInput checkUsernameExistsServiceInput) {
        CheckUsernameExistsServiceOutput checkUsernameExistsServiceOutput = new CheckUsernameExistsServiceOutput();
        List<UserEntity> userEntities = userRepository.findByUsername(checkUsernameExistsServiceInput.getUsername());
        if( userEntities.size() == 0  || userEntities == null) {
            checkUsernameExistsServiceOutput.setExists(false);
        }
        else {
            checkUsernameExistsServiceOutput.setExists(true);
        }
        return checkUsernameExistsServiceOutput;
    }

}

package io.tiny.insta.tinyinstagram.services;

import io.tiny.insta.tinyinstagram.entities.UserEntity;
import io.tiny.insta.tinyinstagram.repositories.UserRepository;
import io.tiny.insta.tinyinstagram.services.io_user.*;
import org.springframework.stereotype.Service;
import java.util.Optional;
import java.util.UUID;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void createUser(CreateUserServiceInput createUserServiceInput) throws Exception {
        UserEntity repositoryInput = new UserEntity(
                createUserServiceInput.getUsername(),
                createUserServiceInput.getPassword(),
                createUserServiceInput.getEmail(),
                System.currentTimeMillis()+"",
                null);
        if(!userRepository.findByUsername(createUserServiceInput.getUsername()).isPresent()){
            userRepository.save(repositoryInput);
        }
        else{
            throw new Exception();
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
        Optional<UserEntity> userEntityOptional = userRepository
                .findByUsernameAndToken(
                        checkTokenServiceInput.getUsername(),
                        checkTokenServiceInput.getToken()
                );
        if(userEntityOptional.isPresent()){
            checkTokenServiceOutput.setConnected(true);
        }
        else{
            checkTokenServiceOutput.setConnected(false);
        }
        return checkTokenServiceOutput;
    }

    @Override
    public FindUserServiceOutput findUser(FindUserServiceInput findUserServiceInput) {
        FindUserServiceOutput findUserServiceOutput = new FindUserServiceOutput();
        Optional<UserEntity> userEntity = userRepository.findByUsernameAndToken(findUserServiceInput.getUsername(),
                findUserServiceInput.getToken());
        Optional<UserEntity> userEntityToFind = userRepository.findByUsername(findUserServiceInput.getUserToSearch());
        if(userEntity.isPresent()){
            if(userEntityToFind.isPresent()) {
                findUserServiceOutput.setUserEntity(userEntityToFind.get());
            }
        }
        return findUserServiceOutput;
    }

    @Override
    public ConnectUserServiceOutput connectUser(ConnectUserServiceInput connectUserServiceInput) {
        Optional<UserEntity> userEntity = userRepository.findByUsernameAndPassword(connectUserServiceInput.getUsername(),
                connectUserServiceInput.getPassword());
        ConnectUserServiceOutput responseOutput = null;
        String tokenGenerated = generateToken();
        if(userEntity.isPresent()){
            if(userEntity.get().getToken() == null){
                userEntity.get().setToken(tokenGenerated);
            }
            userRepository.save(userEntity.get());
            responseOutput = new ConnectUserServiceOutput(userEntity.get().getUsername(), userEntity.get().getToken());
        }
        return responseOutput;
    }

    @Override
    public DisconnectUserServiceOutput disconnectUser(DisconnectUserServiceInput disconnectUserServiceInput) {
        DisconnectUserServiceOutput disconnectResponse = new DisconnectUserServiceOutput();
        Optional<UserEntity> userEntityOptional = userRepository
                .findByUsernameAndToken(
                        disconnectUserServiceInput.getUsername(),
                        disconnectUserServiceInput.getToken()
                );
        if(userEntityOptional.isPresent()){
            userEntityOptional.get().setToken(null);
            userRepository.save(userEntityOptional.get());
            disconnectResponse.setDisconnected(true);
        }
        else{
            disconnectResponse.setDisconnected(false);
        }
        return disconnectResponse;
    }
}

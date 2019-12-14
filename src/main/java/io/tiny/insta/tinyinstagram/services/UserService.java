package io.tiny.insta.tinyinstagram.services;

import io.tiny.insta.tinyinstagram.exceptions.UsernameExistsException;
import io.tiny.insta.tinyinstagram.exceptions.UsernameOrPasswordKoException;
import io.tiny.insta.tinyinstagram.exceptions.UsernameOrTokenKoException;
import io.tiny.insta.tinyinstagram.services.io_user.*;

public interface UserService {

    void createUser(CreateUserServiceInput createUserServiceInput) throws UsernameExistsException;

    ConnectUserServiceOutput connectUser(ConnectUserServiceInput connectUserServiceInput) throws UsernameOrPasswordKoException;

    DisconnectUserServiceOutput disconnectUser(DisconnectUserServiceInput disconnectUserServiceInput);

    String generateToken();

    CheckTokenServiceOutput checkToken(CheckTokenServiceInput checkTokenServiceInput);

    FindUserServiceOutput findUser(FindUserServiceInput findUserServiceInput) throws UsernameOrTokenKoException;

    CheckUsernameExistsServiceOutput checkUsernameExists(CheckUsernameExistsServiceInput checkUsernameExistsServiceInput);



}

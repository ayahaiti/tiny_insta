package io.tiny.insta.tinyinstagram.services;

import io.tiny.insta.tinyinstagram.services.io_user.*;

public interface UserService {

    void createUser(CreateUserServiceInput createUserServiceInput) throws Exception;

    ConnectUserServiceOutput connectUser(ConnectUserServiceInput connectUserServiceInput);

    DisconnectUserServiceOutput disconnectUser(DisconnectUserServiceInput disconnectUserServiceInput);

    String generateToken();

    CheckTokenServiceOutput checkToken(CheckTokenServiceInput checkTokenServiceInput);

    FindUserServiceOutput findUser(FindUserServiceInput findUserServiceInput);

    CheckUsernameExistsServiceOutput CheckUsernameExists(CheckUsernameExistsServiceInput checkUsernameExistsServiceInput);

}

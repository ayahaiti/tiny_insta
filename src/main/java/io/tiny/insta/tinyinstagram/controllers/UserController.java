package io.tiny.insta.tinyinstagram.controllers;

import io.tiny.insta.tinyinstagram.controllers.io_followers.CheckIfFollowedControllerInput;
import io.tiny.insta.tinyinstagram.controllers.io_user.*;
import io.tiny.insta.tinyinstagram.entities.UserEntity;
import io.tiny.insta.tinyinstagram.repositories.UserRepository;
import io.tiny.insta.tinyinstagram.services.UserService;
import io.tiny.insta.tinyinstagram.services.io_user.*;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(path = "/user")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping(method = RequestMethod.POST,
            consumes = "application/json",
            produces = "application/json",
            path = "/create"
    )
    public void createUser(@RequestBody CreateUserControllerInput createUserControllerInput) throws Exception {
        CreateUserServiceInput serviceInput = new CreateUserServiceInput(

                createUserControllerInput.getUsername(),
                createUserControllerInput.getEmail(),
                createUserControllerInput.getPassword());

        userService.createUser(serviceInput);
    }

    @RequestMapping(method = RequestMethod.POST,
            consumes = "application/json",
            produces = "application/json",
            path = "/connect"
    )
    public @ResponseBody ConnectUserControllerOutput connectUser(@RequestBody ConnectUserControllerInput connectUserControllerInput){
        ConnectUserServiceInput serviceInput = new ConnectUserServiceInput(
                connectUserControllerInput.getUsername(),
                connectUserControllerInput.getPassword());
        ConnectUserServiceOutput connectUserServiceOutput = userService.connectUser(serviceInput);
        ConnectUserControllerOutput connectUserControllerOutput = new ConnectUserControllerOutput(connectUserServiceOutput.getUsername()
                                                                    ,connectUserServiceOutput.getToken());
        return connectUserControllerOutput;
    }

    @RequestMapping(method = RequestMethod.POST,
            consumes = "application/json",
            produces = "application/json",
            path = "/disconnect"
    )
    public @ResponseBody DisconnectUserControllerOutput DisConnectUser(
            @RequestBody DisconnectUserControllerInput disconnectUserControllerInput){
        DisconnectUserServiceInput serviceInput = new DisconnectUserServiceInput(
                disconnectUserControllerInput.getUsername(),
                disconnectUserControllerInput.getToken());
        DisconnectUserServiceOutput disconnectUserServiceOutput = userService.disconnectUser(serviceInput);
        DisconnectUserControllerOutput disconnectUserControllerOutput = new DisconnectUserControllerOutput(
                disconnectUserServiceOutput.getDisconnected());
        return disconnectUserControllerOutput;
    }

    @RequestMapping(method = RequestMethod.POST,
            consumes = "application/json",
            produces = "application/json",
            path = "/token/check"
    )
    public @ResponseBody CheckTokenControllerOutput checkToken(
            @RequestBody CheckTokenControllerInput checkTokenControllerInput){
        CheckTokenServiceInput serviceInput = new CheckTokenServiceInput(
                checkTokenControllerInput.getUsername(),
                checkTokenControllerInput.getToken());
        CheckTokenServiceOutput checkTokenServiceOutput = userService.checkToken(serviceInput);
        CheckTokenControllerOutput checkTokenControllerOutput = new CheckTokenControllerOutput(
                checkTokenServiceOutput.getConnected());
        return checkTokenControllerOutput;
    }

    @RequestMapping(method = RequestMethod.POST,
            consumes = "application/json",
            produces = "application/json",
            path = "/find"
    )
    public @ResponseBody FindUserControllerOutput findUser(
            @RequestBody FindUserControllerInput findUserControllerInput) {
        FindUserControllerOutput findUserControllerOutput = new FindUserControllerOutput();
        FindUserServiceInput findUserServiceInput = new FindUserServiceInput(findUserControllerInput.getUserToFind(),
                findUserControllerInput.getUsername(),
                findUserControllerInput.getToken()
        );
        FindUserServiceOutput findUserServiceOutput = userService.findUser(findUserServiceInput);
        findUserControllerOutput.setUserEntity(findUserServiceOutput.getUserEntity());
        return findUserControllerOutput;
    }

    @RequestMapping(method = RequestMethod.POST,
            consumes = "application/json",
            produces = "application/json",
            path = "/username/check"
    )
    public @ResponseBody CheckUsernameExistsControllerOutput checkusernameExists(
            @RequestBody CheckUsernameExistsControllerInput checkUsernameExistsControllerInput){
       CheckUsernameExistsServiceInput checkUsernameExistsServiceInput = new CheckUsernameExistsServiceInput(
               checkUsernameExistsControllerInput.getUsername()
       );
       CheckUsernameExistsServiceOutput checkUsernameExistsServiceOutput = userService.checkUsernameExists(
               checkUsernameExistsServiceInput
       );
       CheckUsernameExistsControllerOutput checkUsernameExistsControllerOutput = new CheckUsernameExistsControllerOutput(
               checkUsernameExistsServiceOutput.isExists()
       );
       return checkUsernameExistsControllerOutput;
    }

}

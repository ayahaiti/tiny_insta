package io.tiny.insta.tinyinstagram.controllers;

import io.tiny.insta.tinyinstagram.controllers.io_user.*;
import io.tiny.insta.tinyinstagram.exceptions.UsernameExistsException;
import io.tiny.insta.tinyinstagram.exceptions.UsernameOrPasswordKoException;
import io.tiny.insta.tinyinstagram.exceptions.UsernameOrTokenKoException;
import io.tiny.insta.tinyinstagram.services.UserService;
import io.tiny.insta.tinyinstagram.services.io_user.*;
import org.springframework.web.bind.annotation.*;

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
    public @ResponseBody CreateUserControllerOutput createUser(@RequestBody CreateUserControllerInput createUserControllerInput) {
        CreateUserServiceInput serviceInput = new CreateUserServiceInput(

                createUserControllerInput.getUsername(),
                createUserControllerInput.getEmail(),
                createUserControllerInput.getPassword());
        try{
            userService.createUser(serviceInput);
            return new CreateUserControllerOutput(null);
        }
        catch (UsernameExistsException ex){
            return new CreateUserControllerOutput("username_used");
        }
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
        ConnectUserServiceOutput connectUserServiceOutput = null;
        try {
            connectUserServiceOutput = userService.connectUser(serviceInput);
        } catch (UsernameOrPasswordKoException e) {
            return new ConnectUserControllerOutput(
                    null,
                    null,
                    "username_password_ko"
            );
        }
        return new ConnectUserControllerOutput(
                connectUserServiceOutput.getUsername(),
                connectUserServiceOutput.getToken(),
                null
        );
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
        FindUserServiceInput findUserServiceInput = new FindUserServiceInput(
                findUserControllerInput.getUserToFind(),
                findUserControllerInput.getUsername(),
                findUserControllerInput.getToken()
        );
        FindUserServiceOutput findUserServiceOutput = null;
        try {
            findUserServiceOutput = userService.findUser(findUserServiceInput);
            findUserControllerOutput.setUserEntity(findUserServiceOutput.getUserEntity());
            findUserControllerOutput.setError(null);
            return findUserControllerOutput;
        } catch (UsernameOrTokenKoException e) {
            findUserControllerOutput.setError("username_token_ko");
            return findUserControllerOutput;
        }
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

package io.tiny.insta.tinyinstagram.controllers.io_user;

import io.tiny.insta.tinyinstagram.entities.UserEntity;

public class FindUserControllerOutput {

    UserEntity userEntity;

    public FindUserControllerOutput() {
    }

    public FindUserControllerOutput(UserEntity userEntity) {
        this.userEntity = userEntity;
    }

    public UserEntity getUserEntity() {
        return userEntity;
    }

    public void setUserEntity(UserEntity userEntity) {
        this.userEntity = userEntity;
        this.userEntity.setPassword(null);
        this.userEntity.setToken(null);
    }
}

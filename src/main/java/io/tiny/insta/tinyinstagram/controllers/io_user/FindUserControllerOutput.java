package io.tiny.insta.tinyinstagram.controllers.io_user;

import io.tiny.insta.tinyinstagram.entities.UserEntity;

public class FindUserControllerOutput {

    private UserEntity userEntity;

    private String error;

    public FindUserControllerOutput() {
    }

    public FindUserControllerOutput(UserEntity userEntity, String error) {
        this.userEntity = new UserEntity();
        this.userEntity = userEntity;
        this.error = error;
    }

    public UserEntity getUserEntity() {
        return userEntity;
    }

    public void setUserEntity(UserEntity userEntity) {
        this.userEntity = userEntity;
        this.userEntity.setPassword(null);
        this.userEntity.setToken(null);
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }
}

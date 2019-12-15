package io.tiny.insta.tinyinstagram.controllers.io_post;

import io.tiny.insta.tinyinstagram.services.utils.PostPojo;

import java.util.List;

public class GetLastPostsControllerOutput {

    private List<PostPojo> postPojos;
    private String error;

    public GetLastPostsControllerOutput(List<PostPojo> list, String error) {
        this.postPojos = list;
        this.error = error;
    }

    public List<PostPojo> getTempPostPojoList() {
        return postPojos;
    }

    public void setTempPostPojoList(List<PostPojo> postPojos) {
        this.postPojos = postPojos;
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }
}

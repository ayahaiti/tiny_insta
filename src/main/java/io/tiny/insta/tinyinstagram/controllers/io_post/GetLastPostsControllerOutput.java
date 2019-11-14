package io.tiny.insta.tinyinstagram.controllers.io_post;

import io.tiny.insta.tinyinstagram.services.utils.PostPojo;

import java.util.List;

public class GetLastPostsControllerOutput {


    private List<PostPojo> postPojos;

    public List<PostPojo> getTempPostPojoList() {
        return postPojos;
    }

    public void setTempPostPojoList(List<PostPojo> postPojos) {
        this.postPojos = postPojos;
    }

    public GetLastPostsControllerOutput(List<PostPojo> list) {
        this.postPojos = list;
    }
}

package io.tiny.insta.tinyinstagram.services.io_post;

import io.tiny.insta.tinyinstagram.services.utils.PostPojo;

import java.util.List;

public class GetLastPostsServiceOutput {

    private List<PostPojo> postEntityList;

    public List<PostPojo> getPostEntityList() {
        return postEntityList;
    }

    public void setPostEntityList(List<PostPojo> postEntityList) {
        this.postEntityList = postEntityList;
    }

    public GetLastPostsServiceOutput(){
    }

    public GetLastPostsServiceOutput(List<PostPojo> list){
        this.postEntityList = list;
    }
}

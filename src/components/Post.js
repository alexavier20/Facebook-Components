import React from 'react';
import Proptypes from 'prop-types';

import Comment from './Comment';

function Post ({data}) {   
    return (
        <>
            <div class="div-boxPost">
                <div class="div-post">
                    <div class="div-profile">               
                        <div class="div-avatar">
                            <img class="img-avatar" src={data.author.avatar} />
                        </div>
                        <div class="div-name">
                            <b>{data.author.name}</b><br />
                            <span class="span-small">{data.date}</span>
                        </div>                       
                    </div> 
                    <div class="div-content">
                        <p>{data.content}</p>
                    </div>
                </div>
                <hr class="hr-line" />
                <div class="div-allComment">
                    {data.comments.map(comment => 
                        <Comment key={comment.id} data={comment} />
                    )}
                </div>
            </div>
            
        </>
    );   
}

Post.Proptypes = {
    data: Proptypes.isRequired,
}

export default Post;
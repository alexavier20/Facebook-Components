import React from 'react';
import Proptypes from 'prop-types';

function Comment({data}) {
    return (
        <>
            <div class="div-comment">
                <div class="div-avatar">
                    <img class="img-avatar" src={data.author.avatar} />
                </div>
                <div class="div-textComment">
                    <p><b>{data.author.name}</b> {data.content}</p>
                </div>
            </div>
        </>
    );
}

Comment.Proptypes = {
    data: Proptypes.isRequired,
}

export default Comment;
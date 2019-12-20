import React, {Component} from 'react';

import Post from './Post';

class PostList extends Component {

    state = {
        posts: [
          {
            id: 1,
            author: {
              name: "Maria Antonieta",
              avatar: "http://ambiel.adv.br/wp-content/uploads/2017/08/A_Foto-Perfil-Claudia.jpg"
            },
            date: "04 Jun 2019",
            content: "Pessoal, alguém sabe o que é ReactJS?",
            comments: [
              {
                id: 1,
                author: {
                  name: "Steve Jobs",
                  avatar: "https://http2.mlstatic.com/foto-desenho-para-o-seu-perfil-das-redes-sociais-D_NQ_NP_848819-MLB27185740300_042018-F.jpg"
                },
                content: "O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros."
              }
            ]
          },
          {
            id: 2,
            author: {
              name: "Steve Jobs",
              avatar: "https://http2.mlstatic.com/foto-desenho-para-o-seu-perfil-das-redes-sociais-D_NQ_NP_848819-MLB27185740300_042018-F.jpg"
            },
            date: "06 Jun 2019",
            content: "O que é React Native?",
            comments: [
              {
                id: 1,
                author: {
                  name: "Maria Antonieta",
                  avatar: "http://ambiel.adv.br/wp-content/uploads/2017/08/A_Foto-Perfil-Claudia.jpg"
                },
                content: "React Native é uma biblioteca Javascript criada pelo Facebook. É usada para desenvolver aplicativos para os sistemas Android e IOS de forma nativa."
              },
              {
                id: 2,
                author: {
                  name: "Maria Antonieta",
                  avatar: "http://ambiel.adv.br/wp-content/uploads/2017/08/A_Foto-Perfil-Claudia.jpg"
                },
                content: "Espero ter ajudado... :)"
              }
            ]
          }
        ]
      };

    render() {
        return (
            <>
                <div class="div-box">             
                    <div class="div-postList">
                        {this.state.posts.map(post => 
                            <Post key={post.id} data={post} />
                        )}                        
                    </div>
                </div>
            </>
        );
    };
}

export default PostList;
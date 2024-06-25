import React, { useEffect } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Post from "../../Components/Feed Components/Post";
import CreatePost from "../../Components/Feed Components/CreatePost";
import { MDBContainer } from "mdb-react-ui-kit";

export default function Feed() {
  const [post, setPost] = React.useState([{
    name: "Mara",
    avatar: "./avatarMara.jpg",
    text: "Teste1",
    date: "2 min atrás",
    likes: "15",
    comments: "2",
  },
  {
    name: "Gabriel Silva",
    avatar: "./avatarGabriel.jpg",
    text: "Teste2",
    date: "4 horas atrás",
    likes: "40",
    comments: "7",
  }
  ]
  );

  useEffect(() => {
    console.log(post);
    setPost(post);
  }, [post]);
  return (
    <>
      <Header />
      <MDBContainer className="py-2">
        <CreatePost createPost={setPost} posts={post} />
        {post.map((post) => (
          <Post
            name={post.name}
            avatar={post.avatar}
            text={post.text}
            date={post.date}
            likes={post.likes}
            comments={post.comments}
          />
        ))}
      </MDBContainer>
      <Footer />
    </>
  );
}

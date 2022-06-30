import React from "react";
import "./Container.css";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";
import NavBar from "./NavBar";
import Post from "./Post";
import Room1 from "./images/room1.jpg";
import Room2 from "./images/room2.jpg";
import Room3 from "./images/room3.jpg";


function Container() {
  return (<div>
    <Header Author="Mando" />
    <NavBar />
     <div className="contain">
      <Post
        Heading = "#1 What Matters?"
        PostText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eros donec ac odio tempor orci dapibus. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Eu ultrices vitae auctor eu. Diam vel quam elementum pulvinar etiam non quam. Ut pharetra sit amet aliquam id diam maecenas ultricies. Risus pretium quam vulputate dignissim. Lacus luctus accumsan tortor posuere ac ut consequat. Id porta nibh venenatis cras sed felis eget. Porttitor eget dolor morbi non arcu risus. Nunc mattis enim ut tellus elementum. Ornare massa eget egestas purus viverra accumsan in nisl. Eget nullam non nisi est sit amet facilisis magna etiam. Volutpat sed cras ornare arcu dui vivamus arcu felis bibendum. Viverra mauris in aliquam sem fringilla ut morbi tincidunt. Nisl pretium fusce id velit ut tortor pretium viverra. Amet nulla facilisi morbi tempus iaculis. Tincidunt dui ut ornare lectus sit amet est. Vitae nunc sed velit dignissim sodales. Amet porttitor eget dolor morbi non arcu risus quis varius. Est ante in nibh mauris cursus mattis molestie a. Ut placerat orci nulla pellentesque dignissim enim sit amet venenatis. Amet consectetur adipiscing elit duis tristique sollicitudin. Suspendisse in est ante in nibh mauris cursus mattis. Sed cras ornare arcu dui vivamus arcu. Amet justo donec enim diam. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Nisl nisi scelerisque eu ultrices vitae auctor eu augue." 
        PostImg = {Room1} />

      <Post
        Heading = "#2 My Second Blog"
        PostText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus et. Id ornare arcu odio ut sem. Nunc mattis enim ut tellus elementum sagittis. Justo eget magna fermentum iaculis eu non diam. Cum sociis natoque penatibus et magnis dis parturient montes nascetur. Eget arcu dictum varius duis at. Diam donec adipiscing tristique risus nec feugiat. Aenean sed adipiscing diam donec adipiscing. Sapien pellentesque habitant morbi tristique senectus et. Quis vel eros donec ac odio tempor orci dapibus ultrices. In iaculis nunc sed augue lacus viverra. Sed risus ultricies tristique nulla aliquet. Convallis convallis tellus id interdum velit. Pulvinar elementum integer enim neque volutpat ac tincidunt. Scelerisque eleifend donec pretium vulputate. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Odio euismod lacinia at quis risus sed vulputate odio. Cras pulvinar mattis nunc sed blandit libero volutpat sed."
        PostImg = {Room2} />

      <Post
        Heading = "#3 What Do I Write Anyway?"
        PostText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna et pharetra pharetra massa massa ultricies mi quis hendrerit. Et malesuada fames ac turpis. Venenatis tellus in metus vulputate eu scelerisque. Quis enim lobortis scelerisque fermentum dui faucibus. Volutpat consequat mauris nunc congue nisi vitae suscipit. Gravida rutrum quisque non tellus. Sit amet facilisis magna etiam tempor orci eu. Enim neque volutpat ac tincidunt vitae semper. Etiam sit amet nisl purus in mollis nunc."
        PostImg = {Room3} />  
      <Banner />
      <Footer />
     </div>
    </div>
  );
}

export default Container;

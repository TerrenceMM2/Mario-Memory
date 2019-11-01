(window["webpackJsonpMario-Memory"]=window["webpackJsonpMario-Memory"]||[]).push([[0],{16:function(e){e.exports=JSON.parse('[{"id":1,"name":"Mario","image":"https://www.ssbwiki.com/images/thumb/4/44/Mario_SSBU.png/250px-Mario_SSBU.png"},{"id":2,"name":"Luigi","image":"https://www.ssbwiki.com/images/thumb/b/bb/Luigi_SSBU.png/250px-Luigi_SSBU.png"},{"id":3,"name":"Princess Peach","image":"https://www.ssbwiki.com/images/thumb/7/74/Peach_SSBU.png/250px-Peach_SSBU.png"},{"id":4,"name":"Bowser","image":"https://www.ssbwiki.com/images/thumb/4/49/Bowser_SSBU.png/250px-Bowser_SSBU.png"},{"id":5,"name":"Yoshi","image":"https://www.ssbwiki.com/images/thumb/8/8d/Yoshi_SSBU.png/250px-Yoshi_SSBU.png"},{"id":6,"name":"Donkey Kong","image":"https://www.ssbwiki.com/images/thumb/c/c9/Donkey_Kong_SSBU.png/250px-Donkey_Kong_SSBU.png"},{"id":7,"name":"Diddy Kong","image":"https://www.ssbwiki.com/images/thumb/a/a7/Diddy_Kong_SSBU.png/250px-Diddy_Kong_SSBU.png"},{"id":8,"name":"Link","image":"https://www.ssbwiki.com/images/thumb/8/84/Link_SSBU.png/250px-Link_SSBU.png"},{"id":9,"name":"Princess Zelda","image":"https://www.ssbwiki.com/images/thumb/c/c8/Zelda_SSBU.png/250px-Zelda_SSBU.png"},{"id":10,"name":"Ganon","image":"https://www.ssbwiki.com/images/thumb/9/91/Ganondorf_SSBU.png/250px-Ganondorf_SSBU.png"},{"id":11,"name":"Fox","image":"https://www.ssbwiki.com/images/thumb/2/2f/Fox_SSBU.png/250px-Fox_SSBU.png"},{"id":12,"name":"Falco","image":"https://www.ssbwiki.com/images/thumb/8/80/Falco_SSBU.png/250px-Falco_SSBU.png"},{"id":13,"name":"Samus","image":"https://www.ssbwiki.com/images/thumb/0/03/Samus_SSBU.png/250px-Samus_SSBU.png"},{"id":14,"name":"Kirby","image":"https://www.ssbwiki.com/images/thumb/0/07/Kirby_SSBU.png/250px-Kirby_SSBU.png"},{"id":15,"name":"Pikachu","image":"https://www.ssbwiki.com/images/thumb/9/93/Pikachu_SSBU.png/250px-Pikachu_SSBU.png"}]')},17:function(e){e.exports=JSON.parse('[{"win":["./gifs/win_1.gif","./gifs/win_2.gif","./gifs/win_3.gif","./gifs/win_4.gif","./gifs/win_5.gif"]},{"loss":["./gifs/loss_1.gif","./gifs/loss_2.gif","./gifs/loss_3.gif","./gifs/loss_4.gif","./gifs/loss_5.gif"]}]')},39:function(e,a,t){e.exports=t(84)},44:function(e,a,t){},45:function(e,a,t){},83:function(e,a,t){},84:function(e,a,t){"use strict";t.r(a);var i=t(0),n=t.n(i),r=t(4),o=t.n(r),s=t(33),l=t(34),c=t(37),m=t(35),d=t(38);t(44);var g=function(e){return n.a.createElement("figure",{className:"figure hvr-grow-shadow"},n.a.createElement("img",{onClick:e.handlerCardClick,src:e.image,id:e.id,alt:e.name,className:"figure-img img-fluid rounded"}))},h={cardContainer:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr",gridTemplateRows:"1fr 1fr 1fr"}};var p=function(e){return n.a.createElement("div",{style:h.cardContainer},e.characters.map(function(a){return n.a.createElement(g,{key:a.id,handlerCardClick:e.handlerCardClick,name:a.name,id:a.id,image:a.image})}))};t(45);var u=function(e){return n.a.createElement("div",{className:"wrapper"},e.children)},w={scoreBoard:{display:"inline-block",fontSize:"1.25rem",float:"right",letterSpacing:"-3px",textAlign:"right",lineHeight:"28px"},score:{fontSize:"1.7rem"}};var S=function(e){return n.a.createElement("div",{style:w.scoreBoard},n.a.createElement("div",null,"CURRENT SCORE: ",n.a.createElement("span",{style:w.score},e.score)),n.a.createElement("div",null,"HIGH SCORE: ",n.a.createElement("span",{style:w.score},e.highScore)))},f={jumbotron:{margin:0,borderRadius:0,padding:"1rem 0",backgroundColor:"transparent"},instructions:{margin:0},title:{fontFamily:"Super Mario",fontKerning:"10px",color:"rgb(96, 165, 238)",letterSpacing:"5px",WebkitTextStroke:"2px black",textShadow:"27px 14px 1px #2607bb",fontSize:"5rem",textAlign:"center"},container:{padding:0}};var b=function(e){return n.a.createElement("div",{style:f.jumbotron,className:"jumbotron jumbotron-fluid"},n.a.createElement("div",{style:f.container,className:"container"},n.a.createElement("h1",{style:f.title,className:"display-4"},"Mario Memory"),n.a.createElement(S,{score:e.score,highScore:e.highScore}),n.a.createElement("div",{style:f.instructions,className:"lead"},"click an image to earn a point."),n.a.createElement("div",{style:f.instructions,className:"lead"},"do not click an image twice.")))},k=t(7),_=t.n(k),B=t(36),y=t.n(B),x={gif:{display:"block",margin:"0 auto",maxWidth:"300px"}};function C(e){return n.a.createElement(_.a,{"aria-labelledby":"contained-modal-title-vcenter",show:e.showModal,centered:!0},n.a.createElement(_.a.Header,{closeButton:!0},n.a.createElement(_.a.Title,{id:"contained-modal-title-vcenter"},e.modalTitle)),n.a.createElement(_.a.Body,null,n.a.createElement("img",{style:x.gif,src:e.modalGif,alt:"gif"})),n.a.createElement(_.a.Footer,null,n.a.createElement(y.a,{onClick:e.hideModal},"Close")))}function E(){return n.a.createElement("audio",{id:"music-bed",src:"./sounds/music_bed.mp3",type:"audio/mp3",loop:!0,autoPlay:!0})}var U=t(16),v=t(17),M=function(e){function a(){var e,t;Object(s.a)(this,a);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(t=Object(c.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={characters:U,score:0,highScore:0,charactersClicked:[],modalTitle:"",modalGif:"",showModal:!1},t.handlerCardClick=function(e){var a=e.target.id;t.handlerCardShuffle(U),t.handlerGameCalculation(t.state.charactersClicked,a)},t.handlerCardShuffle=function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),i=[e[t],e[a]];e[a]=i[0],e[t]=i[1]}return e},t.handlerHideModal=function(){t.setState({showModal:!1})},t.handlerGameCalculation=function(e,a){if(e.includes(a)){var i=v[1].loss[Math.floor(5*Math.random())];t.setState({score:0,charactersClicked:[],modalGif:i,modalTitle:"Game Over!",showModal:!0}),t.state.highScore<t.state.score&&t.setState({highScore:t.state.score})}else{var n=t.state.score+1;if(t.setState({score:n}),15===n){var r=v[0].win[Math.floor(5*Math.random())];t.setState({highScore:15,score:0,charactersClicked:[],modalGif:r,modalTitle:"You Win!",showModal:!0})}}t.state.charactersClicked.push(a)},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(b,{score:this.state.score,highScore:this.state.highScore}),n.a.createElement(u,null,n.a.createElement(p,{handlerGameCalculation:this.handlerGameCalculation,handlerCardClick:this.handlerCardClick,characters:this.state.characters})),n.a.createElement(C,{close:this.handlerCloseModal,onHide:this.close,modalTitle:this.state.modalTitle,modalGif:this.state.modalGif,showModal:this.state.showModal,hideModal:this.handlerHideModal}),n.a.createElement(E,null))}}]),a}(i.Component);t(83);o.a.render(n.a.createElement(M,null),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.c8e6d460.chunk.js.map
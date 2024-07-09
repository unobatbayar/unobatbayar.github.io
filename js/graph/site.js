//
// site.js
//
// unobatbayar © 2018
//
  
var sys = arbor.ParticleSystem(1000, 400,1);
sys.parameters({gravity:true});
sys.renderer = Renderer("#viewport");
var data = {
  nodes:{

  user:{'color':'lightskyblue','shape':'dot','label':'Usukhbayar Batbayar'},

  programming:{'color':'lightskyblue','shape':'dot','label':'Programming'},
  interests:{'color':'lightskyblue','shape':'dot','label':'Hobby'},

  },
  edges:{
    user:{ programming:{}, interests:{}},

  }
};

sys.graft(data);

setTimeout(function(){
var postLoadData = {
nodes:{
  // programming
  lang1:{'color':'tomato','shape':'square','label':'Swift'},
  lang2:{'color':'cornflowerblue','shape':'square','label':'C++'},
  lang3:{'color':'dodgerblue','shape':'square','label':'python'},

  // interests
  interest1:{'color':'cornflowerblue','shape':'square','label':'Apps'},
  interest2:{'color':'teal','shape':'square','label':'Chess'},
  interest3:{'color':'slateblue','shape':'square','label':'Basketball'},
  interest4:{'color':'slateblue','shape':'square','label':'Piano'},

},
edges:{
  interests:{interest1:{}, interest2:{}, interest3:{}, interest4:{}},
  programming:{lang1:{}, lang2:{}, lang3:{}},
}
};
sys.graft(postLoadData);
},2000);

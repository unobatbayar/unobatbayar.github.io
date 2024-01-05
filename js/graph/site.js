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

  user:{'color':'deepskyblue','shape':'dot','label':'Uno'},

  programming:{'color':'lightskyblue','shape':'dot','label':'programming'},
  interests:{'color':'lightskyblue','shape':'dot','label':'interests'},
  tools:{'color':'lightskyblue','shape':'dot','label':'tools'},

  },
  edges:{
    user:{ programming:{}, interests:{}, tools:{}},

  }
};

sys.graft(data);

setTimeout(function(){
var postLoadData = {
nodes:{
  // programming
  swift:{'color':'slategrey','shape':'square','label':'swift'},
  csharp:{'color':'slategrey','shape':'square','label':'c#'},
  python:{'color':'slategrey','shape':'square','label':'python'},

  // tools
  iOS:{'color':'slategrey','shape':'square','label':'iOS'},
  unity:{'color':'slategrey','shape':'square','label':'unity3d'},
  flutter:{'color':'slategrey','shape':'square','label':'flutter'},

  // interests
  interest1:{'color':'slategrey','shape':'square','label':'piano'},
  // interest2:{'color':'slategrey','shape':'square','label':'programming'},
  interest3:{'color':'slategrey','shape':'square','label':'mathematics'},
},
edges:{
  interests:{interest1:{}, interest3:{}},
  programming:{swift:{}, csharp:{}, python:{}},
  tools:{iOS:{}, unity:{}, flutter:{}}
}
};
sys.graft(postLoadData);
},4000);

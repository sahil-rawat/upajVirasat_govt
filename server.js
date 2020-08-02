var express = require('express');
const path = require('path');
const router = express.Router();


var app= express()

app.use(express.static('res'));
app.set("view engine", "ejs"); 
app.set("views", __dirname + "/res/");

//Firebase setup start
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://upajvirasat-cd526.firebaseio.com"
});
//Firebase setup end

//Extracting Data from Firebase
const db = admin.firestore();

var arhar_yield={};
var banana_yield={};
var cauliflower_yield={};
var eggplant_yield={};
var gram_yield={};
var guava_yield={};
var jute_yield={};
var lentils_yield={};
var lychee_yield={};
var maize_yield={};
var mango_yield={};
var moong_yield={};
var onion_yield={};
var peas_yield={};
var pineapple_yield={};
var potato_yield={};
var rice_yield={};
var sugarcane_yield={};
var urad_yield={};
var wheat_yield={};

var data={};

data['req']={}

async function loadData(){

	const arhar_ref = db.collection('Crops').doc('arhar').collection('Yield');
	const arhar = await arhar_ref.get();
	const arhar_req= await db.collection('Crops').doc('arhar').get()
	data['req']['arhar_req']=arhar_req.data()['req']
	var month=0;
	var total=0;
	arhar.forEach(doc => {
		month=month+1
		arhar_yield[month]=doc.data()['yield'];
		total+=doc.data()['yield']
		
	});
	arhar_yield['total']=total

	const banana_ref = db.collection('Crops').doc('banana').collection('Yield');
	const banana = await banana_ref.get();
	const banana_req= await db.collection('Crops').doc('banana').get()
	data['req']['banana_req']=banana_req.data()['req']
	var month=0;
	var total=0;
	banana.forEach(doc => {
		month=month+1
		banana_yield[month]=doc.data()['yield'];
		total+=doc.data()['yield']
	});
	banana_yield['total']=total


	const cauliflower_ref = db.collection('Crops').doc('cauliflower').collection('Yield');
	const cauliflower = await cauliflower_ref.get();
	const cauliflower_req= await db.collection('Crops').doc('cauliflower').get()
	data['req']['cauliflower_req']=cauliflower_req.data()['req']
	var month=0;
	var total=0;
	cauliflower.forEach(doc => {
		month=month+1
		cauliflower_yield[month]=doc.data()['yield'];
		total+=doc.data()['yield']
	});
	cauliflower_yield['total']=total
	

	const eggplant_ref = db.collection('Crops').doc('eggplant').collection('Yield');
	const eggplant = await eggplant_ref.get();
	const eggplant_req= await db.collection('Crops').doc('eggplant').get()
	data['req']['eggplant_req']=eggplant_req.data()['req']
	var month=0;
	var total=0;
	eggplant.forEach(doc => {
		month=month+1
		eggplant_yield[month]=doc.data()['yield'];
		total+=doc.data()['yield']
	});
	eggplant_yield['total']=total

	const gram_ref = db.collection('Crops').doc('gram').collection('Yield');
	const gram = await gram_ref.get();
	const gram_req= await db.collection('Crops').doc('gram').get()
	data['req']['gram_req']=gram_req.data()['req']
	var month=0;
	var total=0;
	gram.forEach(doc => {
		month=month+1
		gram_yield[month]=doc.data()['yield'];
		total+=doc.data()['yield']
	});
	gram_yield['total']=total

	const guava_ref = db.collection('Crops').doc('guava').collection('Yield');
	const guava = await guava_ref.get();
	const guava_req= await db.collection('Crops').doc('guava').get()
	data['req']['guava_req']=guava_req.data()['req']
	var month=0;
	var total=0;
	guava.forEach(doc => {
		month=month+1
		guava_yield[month]=doc.data()['yield'];
		total+=doc.data()['yield']
	});
	guava_yield['total']=total

	const jute_ref = db.collection('Crops').doc('jute').collection('Yield');
	const jute = await jute_ref.get();
	const jute_req= await db.collection('Crops').doc('jute').get()
	data['req']['jute_req']=jute_req.data()['req']
	var month=0;
	var total=0;
	jute.forEach(doc => {
		month=month+1
		jute_yield[month]=doc.data()['yield'];
		total+=doc.data()['yield']
	});
	jute_yield['total']=total

	const lentils_ref = db.collection('Crops').doc('lentils').collection('Yield');
	const lentils = await lentils_ref.get();
	const lentils_req= await db.collection('Crops').doc('lentils').get()
	data['req']['lentils_req']=lentils_req.data()['req']
	var month=0;
	var total=0;
	lentils.forEach(doc => {
		month=month+1
		lentils_yield[month]=doc.data()['yield'];
		total+=doc.data()['yield']
	});
	lentils_yield['total']=total

	const lychee_ref = db.collection('Crops').doc('lychee').collection('Yield');
	const lychee = await lychee_ref.get();
	const lychee_req= await db.collection('Crops').doc('lychee').get()
	data['req']['lychee_req']=lychee_req.data()['req']
	var month=0;
	var total=0;
	lychee.forEach(doc => {
		month=month+1
		lychee_yield[month]=doc.data()['yield'];
		total+=doc.data()['yield']
	});
	lychee_yield['total']=total

	const maize_ref = db.collection('Crops').doc('maize').collection('Yield');
	const maize = await maize_ref.get();
	const maize_req= await db.collection('Crops').doc('maize').get()
	data['req']['maize_req']=maize_req.data()['req']
	var month=0;
	var total=0;
	maize.forEach(doc => {
		month=month+1
		maize_yield[month]=doc.data()['yield'];
		total+=doc.data()['yield']
	});
	maize_yield['total']=total

	const mango_ref = db.collection('Crops').doc('mango').collection('Yield');
	const mango = await mango_ref.get();
	const mango_req= await db.collection('Crops').doc('mango').get()
	data['req']['mango_req']=mango_req.data()['req']
	var month=0;
	var total=0;
	mango.forEach(doc => {
		month=month+1
		mango_yield[month]=doc.data()['yield'];
		total+=doc.data()['yield']
	});
	mango_yield['total']=total

	const moong_ref = db.collection('Crops').doc('moong').collection('Yield');
	const moong = await moong_ref.get();
	const moong_req= await db.collection('Crops').doc('moong').get()
	data['req']['moong_req']=moong_req.data()['req']
	var month=0;
	var total=0;
	moong.forEach(doc => {
		month=month+1
		 moong_yield[month]=doc.data()['yield'];
		 total+=doc.data()['yield']
	});
	moong_yield['total']=total

	const onion_ref = db.collection('Crops').doc('onion').collection('Yield');
	const onion = await onion_ref.get();
	const onion_req= await db.collection('Crops').doc('onion').get()
	data['req']['onion_req']=onion_req.data()['req']
	var month=0;
	var total=0;
	onion.forEach(doc => {
		month=month+1
		onion_yield[month]=doc.data()['yield'];
		total+=doc.data()['yield']
	});
	onion_yield['total']=total

	const peas_ref = db.collection('Crops').doc('peas').collection('Yield');
	const peas = await peas_ref.get();
	const peas_req= await db.collection('Crops').doc('peas').get()
	data['req']['peas_req']=peas_req.data()['req']
	var month=0;
	var total=0;
	peas.forEach(doc => {
		month=month+1
		peas_yield[month]=doc.data()['yield'];
		total+=doc.data()['yield']
	});
	peas_yield['total']=total

	const pineapple_ref = db.collection('Crops').doc('pineapple').collection('Yield');
	const pineapple = await pineapple_ref.get();
	const pineapple_req= await db.collection('Crops').doc('pineapple').get()
	data['req']['pineapple_req']=pineapple_req.data()['req']
	var month=0;
	var total=0;
	pineapple.forEach(doc => {
		month=month+1
		pineapple_yield[month]=doc.data()['yield'];
		total+=doc.data()['yield']
	});
	pineapple_yield['total']=total

	const potato_ref = db.collection('Crops').doc('potato').collection('Yield');
	const potato = await potato_ref.get();
	const potato_req= await db.collection('Crops').doc('potato').get()
	data['req']['potato_req']=potato_req.data()['req']
	var month=0;
	var total=0;
	potato.forEach(doc => {
		month=month+1
		potato_yield[month]=doc.data()['yield'];
		total+=doc.data()['yield']
	});
	potato_yield['total']=total

	const rice_ref = db.collection('Crops').doc('rice').collection('Yield');
	const rice = await rice_ref.get();
	const rice_req= await db.collection('Crops').doc('rice').get()
	data['req']['rice_req']=rice_req.data()['req']
	var month=0;
	var total=0;
	rice.forEach(doc => {
		month=month+1
		rice_yield[month]=doc.data()['yield'];
		total+=doc.data()['yield']
	});
	rice_yield['total']=total

	const sugarcane_ref = db.collection('Crops').doc('sugarcane').collection('Yield');
	const sugarcane = await sugarcane_ref.get();
	const sugarcane_req= await db.collection('Crops').doc('sugarcane').get()
	data['req']['sugarcane_req']=sugarcane_req.data()['req']
	var month=0;
	var total=0;
	sugarcane.forEach(doc => {
		month=month+1
		sugarcane_yield[month]=doc.data()['yield'];
		total+=doc.data()['yield']
	});
	sugarcane_yield['total']=total

	const urad_ref = db.collection('Crops').doc('urad').collection('Yield');
	const urad = await urad_ref.get();
	const urad_req= await db.collection('Crops').doc('urad').get()
	data['req']['urad_req']=urad_req.data()['req']
	var month=0;
	var total=0;
	urad.forEach(doc => {
		month=month+1
		urad_yield[month]=doc.data()['yield'];
		total+=doc.data()['yield']
	});
	urad_yield['total']=total

	const wheat_ref = db.collection('Crops').doc('wheat').collection('Yield');
	const wheat = await wheat_ref.get();
	const wheat_req= await db.collection('Crops').doc('wheat').get()
	data['req']['wheat_req']=wheat_req.data()['req']
	var month=0;
	var total=0;
	wheat.forEach(doc => {
		month=month+1
		wheat_yield[month]=doc.data()['yield'];
		total+=doc.data()['yield']
	});
	wheat_yield['total']=total

	data['arhar']=arhar_yield;
	data['banana']=banana_yield;
	data['cauliflower']=cauliflower_yield;
	data['eggplant']=eggplant_yield;
	data['gram']=gram_yield;
	data['guava']=guava_yield;
	data['jute']=jute_yield;
	data['lentils']=lentils_yield;
	data['lychee']=lychee_yield;
	data['maize']=maize_yield;
	data['mango']=mango_yield;
	data['moong']=moong_yield;
	data['onion']=onion_yield;
	data['peas']=peas_yield;
	data['pineapple']=pineapple_yield;
	data['potato']=potato_yield;
	data['rice']=rice_yield;
	data['sugarcane']=sugarcane_yield;
	data['urad']=urad_yield;
	data['wheat']=wheat_yield;
	return data;
}
//Extracting Data from Firebase end

//App Routing Functions start
router.get('/',function(req,res){
	res.setHeader('Content-type','text/html')
	async function ren(){
		s=await loadData()
		
		await res.render('index',{ 
			data:JSON.stringify(s)
		})
	}
	ren()
})

router.get('/table',function(req,res){
	res.setHeader('Content-type','text/html')
	async function ren(){
		s=await loadData()
		
		await res.render('table',{ 
			data:JSON.stringify(s)
		})
	}
	ren()
})

router.get('/crops',function(req,res){
	res.setHeader('Content-type','text/html')
	async function ren(){
		s=await loadData()
		data_send={}
		c_name=req.query.crop
		data_send["yield"]=await s[req.query.crop]
		data_send["req"]=await s['req'][req.query.crop+"_req"]
		data_send['name']=c_name;

		
		await res.render('crops',{ 
			data:JSON.stringify(s),
			graph_data:JSON.stringify(data_send),
			crop:c_name
		})
	}
	ren()
})

router.get('*',function(req,res){
	res.sendFile(path.join(__dirname, '/res/', '404.html'))
})

app.use('/',router);

app.listen(process.env.PORT ||8080)
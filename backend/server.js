//IMPORT
const express = require('express')
const app = express()
const bodyParser = require('body-parser') //ambil nilai dari form front end
const multer = require('multer') //handle file
const mongoose = require('mongoose');

const storage = multer.diskStorage({
	destination: function(request, file, cb){
		cb(null,'public/uploads/')
	},
	filename: function(request, file, cb){
		cb(null, file.originalname)
	}
})
const upload = multer({storage : storage}) //destinasi file ketika di upload user

mongoose.connect('mongodb://localhost:27017/namadatabase', { useMongoClient: true, promiseLibrary: global.Promise });

app.use(express.static('public'));

//SETTER
app.set('view engine','hbs')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//TABEL

const mahasiswaSchema = mongoose.Schema({
    name: String,
    nim : String
});

//Model

const Mahasiswa = mongoose.model('Mahasiswa', mahasiswaSchema);

//ROUTES
app.get('/',function(request,response){
	response.render('index.hbs')	
})

app.post('/daftarsg', upload.any(), function(request,response){
	/*console.log('hehehe');
	console.log({body : request.body})
	console.log({ files: request.files})*/
	let newMahasiswa = new Mahasiswa({ name : "Hevyka"})
	newMahasiswa.save()

	response.redirectt('/')
})


app.post('/daftarrg', upload.any(), function(request,response){
	/*console.log('hehehe');
	console.log({body : request.body})
	console.log({files : request.files})*/
	let newMahasiswa = new Mahasiswa({ name : "Hevyka"})
	newMahasiswa.save()

	response.redirectt('/')
})

app.get('/user/:id/show',function(request,response){
	let id = request.params.id

	response.render('showid',{
		idshow : id
	})
})

app.get('/alluser', function(request,response){
	let users = [{
		'id':1,
		'nama': 'hevyka'
	},{
		'id' : 2,
		'nama' : 'aka'
	},{
		'id' : 3,
		'nama' : 'alam'
	}]
	response.render('allusers',{
		usersku : users
	})
})

app.listen('8000', function(){
	console.log('Connected on port 8000')
})

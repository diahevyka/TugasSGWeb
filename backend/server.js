//IMPORT
const express = require('express')
const app = express()
const bodyParser = require('body-parser') //ambil nilai dari form front end
const multer = require('multer') //handle file

const storage = multer.diskStorage({
	destination: function(request, file, cb){
		cb(null,'public/uploads/')
	},
	filename: function(request, file, cb){
		cb(null, file.originalname)
	}
})
const upload = multer({storage : storage}) //destinasi file ketika di upload user

app.use(express.static('public'));

//SETTER
app.set('view engine','hbs')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//ROUTES
app.get('/route_biasa', function(request, response){
	response.send('Hello HEVYKA!')
})

app.get('/',function(request,response){
	response.render('index.hbs')
})

app.post('/daftarsg', upload.any(), function(request,response){
	console.log('hehehe');
	console.log({body : request.body})
	console.log({ files: request.files})
})


app.post('/daftarrg', upload.any(), function(request,response){
	console.log('hehehe');
	console.log({body : request.body})
	console.log({files : request.files})
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

//IMPORT
const express = require('express')
const app = express()

//SETTER
app.set('view engine','hbs')

//ROUTES
app.get('/route_biasa', function(request, response){
	response.send('Hello HEVYKA!')
})

app.get('/',function(request,response){
	let nama = 'Basisdata Lab'

	response.render('hevyka',{
		namahbs:nama
	})
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

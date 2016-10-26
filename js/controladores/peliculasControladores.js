var Ctrl = (function(){

	var _listaCtrl = function($scope,$rootScope,$http,$log,$window){
		$rootScope.page = 1;
		$http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=4584ae721cb020ce65a4bd25368ec31e&language=es')
			.success(function(peliculas){
				
				$scope.peliculas = peliculas.results;
			})
			.error(function(err){
				$log.log("Fallo en la peticion AJAX " + err.code + "-" + err.message);
				$window.alert("Fallo en la peticion AJAX " + err.code + "-" + err.message);
			});
			$scope.criterio = {};
			$scope.criterio.columna = 'title';
			$scope.criterio.sentido = false;

	};
	var _pageCtrl = function($scope, $rootScope,$http,$log,$routeParams,$window){
		$http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=4584ae721cb020ce65a4bd25368ec31e&page='+ $routeParams.page + '&language=es')
			.success(function(peliculas){
				$scope.page = Number($routeParams.page);
				$scope.peliculas = peliculas.results;
				$scope.totalPages = peliculas.total_pages;
			})
			
			.error(function(err){
				$log.log("Fallo en la peticion AJAX " + err.code + "-" + err.message);
				$window.alert("Fallo en la peticion AJAX " + err.code + "-" + err.message);
			});


	};

	var _proximosCtrl = function($scope,$rootScope,$http,$log,$window){
		$rootScope.page = 1;
		$http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=4584ae721cb020ce65a4bd25368ec31e&language=es')
			.success(function(peliculas){
				
				$scope.peliculas = peliculas.results;
			})
			.error(function(err){
				$log.log("Fallo en la peticion AJAX " + err.code + "-" + err.message);
				$window.alert("Fallo en la peticion AJAX " + err.code + "-" + err.message);
			});

		};

	var _pageProxCtrl = function($scope, $rootScope,$http,$log,$routeParams,$window){
		$http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=4584ae721cb020ce65a4bd25368ec31e&language=es'+ $routeParams.page + '&language=es')
			.success(function(peliculas){
				$scope.page = Number($routeParams.page);
				$scope.peliculas = peliculas.results;
				$scope.totalPages = peliculas.total_pages;
			})
			
			.error(function(err){
				$log.log("Fallo en la peticion AJAX " + err.code + "-" + err.message);
				$window.alert("Fallo en la peticion AJAX " + err.code + "-" + err.message);
			});

	};

	var _titleCtrl = function($scope,$http,$log,$window,$routeParams){
			
		$http.get('https://api.themoviedb.org/3/movie/' + $routeParams.title + '?api_key=4584ae721cb020ce65a4bd25368ec31e&language=es')
			
			.success(function(pelicula){
				//pelicula.poster_path = 'http://image.tmdb.org/t/p/w185' + pelicula.poster_path; 
				$scope.pelicula = pelicula;
			})

			.success(function(pelicula){ 
				$scope.pelicula = pelicula;
			})
			
			.error(function(err){
				$log.log("Fallo en la peticion AJAX " + err.code + "-" + err.message)
				$window.alert("Fallo en la peticion AJAX " + err.code + "-" + err.message)
			});

	};

	// animación para ir arriba de la página web al pulsar el botón.	
	var _subirCtrl = function(){

		$('.scrollup').click(function(){
			$("html, body").animate({ scrollTop: 0 }, 300);
			return false;
		});
	};

	var _buscarCtrl = function($scope,$http,$routeParams,$rootScope){
		$scope.buscarPelis = function(t){
			$rootScope.page = 1;
			$rootScope.tit = t;
			window.location.hash = '#/buscador/' + t;
		
		};
		
		$scope.buscarEnter = function(tecla,t) {
			if (tecla.which === 13){
				$rootScope.page = 1;
				$rootScope.tit = t;
				window.location.hash = '#/buscador/' + t;
			}
		};
	};

	var _buscarPeliCtrl = function($scope,$http,$routeParams,$log,$rootScope){
		$http.get('https://api.themoviedb.org/3/search/movie?api_key=4584ae721cb020ce65a4bd25368ec31e&query=' + $routeParams.titulo + '&language=es')
			.success(function(peliculas){
				$scope.page = $rootScope.page;
				$scope.peliculas = peliculas.results;
				$scope.totalPages = peliculas.total_pages;
				var total_results = $scope.total_results = peliculas.total_results;
			if(total_results === 0){
				console.log('no existe')
				//$('.lista').html('no existe');
				}
			})
			
			.error(function(err){
				$log.log("Fallo en la peticion AJAX " + err.code + "-" + err.message);
				$window.alert("Fallo en la peticion AJAX " + err.code + "-" + err.message);
			});
		};

	var _bpageCtrl = function($scope, $rootScope,$http,$log,$routeParams,$window){

	$http.get('https://api.themoviedb.org/3/search/movie?api_key=4584ae721cb020ce65a4bd25368ec31e&query=' + $routeParams.titulo + '&page=' + $routeParams.id + '&language=es')
		.success(function(peliculas){
			$scope.page = Number($routeParams.id);
			$scope.tit = $rootScope.tit;
			$scope.peliculas = peliculas.results;
			$scope.totalPages = peliculas.total_pages;
		})
		
		.error(function(err){
			$log.log("Fallo en la peticion AJAX " + err.code + "-" + err.message);
			$window.alert("Fallo en la peticion AJAX " + err.code + "-" + err.message);
		});
	};

	return {
		listaCtrl: _listaCtrl,
		pageCtrl: _pageCtrl,
		titleCtrl: _titleCtrl,
		subirCtrl: _subirCtrl,
		buscarCtrl: _buscarCtrl,
		buscarPeliCtrl: _buscarPeliCtrl,
		bpageCtrl: _bpageCtrl,
		proximosCtrl: _proximosCtrl,
		pageProxCtrl: _pageProxCtrl
	};
})();

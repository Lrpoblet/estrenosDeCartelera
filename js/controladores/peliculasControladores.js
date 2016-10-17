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

	// animación para ir arriba de la página web al pulsar el botón.	
	var _subirCtrl = function(){

		$('.scrollup').click(function(){
			$("html, body").animate({ scrollTop: 0 }, 300);
			return false;
		});
	};

	return {
		listaCtrl: _listaCtrl,
		pageCtrl: _pageCtrl,
		subirCtrl: _subirCtrl
	};
})();

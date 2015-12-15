function TodoCtrl($scope){


	$scope.todos = [{text:"LearnAngular", done:false},
	{text:"Build an App", done:false}
	];

	$scope.totalTodos=$scope.todos.length;

	$scope.addTodo= function (argument) {
		$scope.todos.push({text:$scope.formTodoText, done:false});
		$scope.formTodoText="";
	}
}
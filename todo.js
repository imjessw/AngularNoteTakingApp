function TodoCtrl($scope){
	
	$scope.totalTodos =4;

	$scope.todos = [{text:"LearnAngular", done:false},
	{text:"Build an App", done:false}
	];

	$scope.addTodo= function (argument) {
		$scope.todos.push({text:$scope.formTodoText, done:false});
		$scope.formTodoText="";
	}
}
function TodoController() {
	// new up the TodoService that has already been configured for your use
	// There are two methods getTodos returns and array
	// saveTodos accepts an array and stores it to your local storage
	var todoService = new TodoService()

	this.addTodoFromForm = function (e) {
		e.preventDefault()
		// TAKE THE INFORMATION FORM THE FORM
		var form = e.target
		//ADD IT TO THE ARRAY BELOW
		var todos = todoService.getTodos()
		todos.push(form.todo.value)



		// FINAL ACTION OF ADDING A TODO
		todoService.saveTodos(todos)
		draw()
	}

	function deleteTodo() {
		//have a button that triggers a splice from array, recall saved todos on service side, then re-draw todos.
        var id = this.getAttribute('id');
        var todos = todoService.getTodos();
        todos.splice(id, 1);
        todoService.saveTodos(todos);
        draw();
        return false;
    }

    function draw() {
        var todos = todoService.getTodos();
		var items = todos.length
		document.getElementById("num-items").innerText = items
        
		var template = '<ul>';
        for (var i = 0; i < todos.length; i++) {
            template += '<li>' + todos[i] + ' <button class="remove" id="' + i + '">x</button></li>';
        };
        template += '</ul>';
        document.getElementById('todoHere').innerHTML = template;
        var buttons = document.getElementsByClassName('remove');
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', deleteTodo);
        };
			
    }
    draw();
}

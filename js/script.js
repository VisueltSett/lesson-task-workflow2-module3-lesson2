async function postRequestAxios(){
	const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
		method: "POST",
		body: JSON.stringify({
			title: "foo",
			body: "bar",
			userId: 1,
		}),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	});
	console.log(response.data);
}
postRequestAxios();



async function postRequest() {
	const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
		method: "POST",
		body: JSON.stringify({
			title: "foo",
			body: "bar",
			userId: 1,
		}),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	});
	const json = await response.json();
	console.log( json);
}

postRequest();

async function putRequest() {
	const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
		method: "PUT",
		body: JSON.stringify({
			id: 1,
			title: "foot",
			body: "bart",
			userId: 1,
		}),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	});
	const json = await response.json();
	console.log(json);
}

putRequest();


async function putRequestAxios() {
	const response = await axios.put("https://jsonplaceholder.typicode.com/posts/1", {
		method: "PUT",
		body: JSON.stringify({
			id: 1,
			title: "foot",
			body: "bart",
			userId: 1,
		}),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	});
	console.log(response.data);
}

putRequestAxios();



function deleteRequest() {
	fetch("https://jsonplaceholder.typicode.com/posts/1", {
		method: "DELETE",
	});
}

deleteRequest();

function deleteRequestAxios() {
	axios.delete("https://jsonplaceholder.typicode.com/posts/1", {
		method: "DELETE",
	});
}

deleteRequestAxios();

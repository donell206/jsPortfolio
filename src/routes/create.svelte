<script>
let firstname;
let lastname;


let questions = [
		{ id: 1, text: `Belgium` },
		{ id: 2, text: `Holland` },
		{ id: 3, text: `France` }
	];

let selected;

	




let subject;

function handleSubmit() {
    alert(`answered question ${selected.id}(${selected.text})${firstname}${lastname}${subject} `);
        
	}


</script>

<h1>Contact form</h1>

<style>
    /* Style inputs with type="text", select elements and textareas */
input[type=text], select, textarea {
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */ 
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */
}

/* Style the submit button with a specific background color etc */
input[type=submit] {
  background-color: #04AA6D;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* When moving the mouse over the submit button, add a darker green color */
input[type=submit]:hover {
  background-color: #45a049;
}

/* Add a background color and some padding around the form */
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}


h1{
text-align: center;

}
</style>


<div class="container">
    <form on:submit|preventDefault={handleSubmit}>
  
      <label for="fname">First Name</label>
      <input type="text" id="fname" name="firstname" placeholder="Your name.." bind:value={firstname} required>
  
      <label for="lname">Last Name</label>
      <input type="text" id="lname" name="lastname" placeholder="Your last name.." bind:value={lastname} required>
  
     

      <label for="country">Country</label>
      <select id="country" name="country" bind:value={selected} required>
		{#each questions as question}
			<option value={question}>
				{question.text}
			</option>
		{/each}
	</select>
  
      <label for="subject">Subject</label>
      <textarea id="subject" name="subject" placeholder="Write something.." bind:value={subject} required style="height:200px"></textarea>
  
      <input type="submit" value="Submit">
  
    </form>
  </div>



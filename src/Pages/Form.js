import React from "react";

const Form = () => {

    const handleSubmit = (event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const comment =event.target.comment.value;
        console.log(name, comment);
        
    }
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="card-actions justify-end">
        </div>
        <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" className="input input-bordered input-secondary w-full max-w-xs" />
        <textarea type="text" name="comment" className="textarea textarea-success my-6" placeholder="Write your comment"></textarea>
        <button type="submit" className="btn">Submit</button>
        </form>
        <div className="commentBody" >
            
        </div>
      </div>
    </div>
  );
};

export default Form;

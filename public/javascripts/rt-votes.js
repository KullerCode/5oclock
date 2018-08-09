var socket = io();

socket.on('vote-changed', function(specialDoc) {
    var upvoteDiv = document.querySelector(`#special-${specialDoc._id} div.upvote`);
    if (upvoteDiv) {
        var downvoteDiv = document.querySelector(`#special-${specialDoc._id} div.downvote`);
        upvoteDiv.innerHTML = specialDoc.votes.upvotes;
        downvoteDiv.innerHTML = specialDoc.votes.downvotes;
    }
});

function upvote(specialId) {
    event.target.setAttribute('disabled', 'disabled');
    socket.emit('upvote', specialId);
    
};

function downvote(specialId) {
    event.target.setAttribute('disabled', 'disabled');
    socket.emit('downvote', specialId);
};



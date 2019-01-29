$('#flashMessage')
    .hide()
    .slideDown(1000)
    .delay(3000)
    .slideUp();

const title = "My First Blog Post";
const content = "This is my <strong>first</strong> post.";

$('#blogTitlePreview').html(title);
$('#blogContentPreview').html(content);


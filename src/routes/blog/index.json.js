import posts from './_posts.js';

import posts from './_data.js';

export function get(req, res,next) {
	res.end(JSON.stringify(jobs));
}



const contents = JSON.stringify(posts.map(post => {
	return {
		title: post.title,
		slug: post.slug
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}
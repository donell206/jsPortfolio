<script>
	export let segment;
</script>

<style>
	nav {
		border-bottom: 10px solid rgba(41, 43, 41, 0.568);
		font-weight: 300;
		
		color:white;
		padding: 0 1em;
		background-color: rgba(25, 24, 26, 0.822);
		
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgba(170, 170, 172, 0.26);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
		text-decoration-color: aliceblue;
		color: beige;
	}
</style>

<nav>
	<ul>
		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">Home</a></li>
		<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">Over</a></li>
		<li><a aria-current="{segment === 'create' ? 'page' : undefined}" href="create">Contact</a></li>
		<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="Cv">Mijn Cv</a></li>
		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">Posts</a></li>
	</ul>
</nav>

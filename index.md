---
layout: default
---

<div id="content">
  <div class="sect1 pagenumrestart">
    <h2 id="introduction">Building Tools with GitHub</h2>
    <div class="sectionbody">
      <div class="sect3">
	<h4 id="_by_chris_dawson_and_ben_straub">By Chris Dawson and Ben Straub</h4>
	<div class="paragraph">
	  <p>If you find value in the material here,
	    consider supporting the authors by buying the book from <a href="http://shop.oreilly.com/product/0636920043027.do">O&#8217;Reilly</a>
	    or on <a href="https://www.amazon.com/Building-Tools-GitHub-Customize-Workflow/dp/149193350X">Amazon</a></p>
	</div>
	<div class="paragraph">
	  <p>The repository with this book contents can be
	    found at <a href="https://github.com/xrd/BuildingToolsWithGithubBook">github.com/xrd/BuildingToolsWithGithubBook</a>.</p>
	</div>
	<div class="paragraph">
	  <p>If you would like to offer your comments and suggestions on the book while reading, try visiting the
	    <a href="https://btwg2.teddyhyde.io">experimental site</a>.</p>
	</div>
	<div class="paragraph">
	  <p>A huge thank you to O&#8217;Reilly for allowing us to republish this under creative commons.</p>
	</div>
	<div class="olist arabic">
	  <ol class="arabic">

	    {% for page in site.pages %}
	    {% if page.title %}
	    <li>
	      <a href="{{ page.url }}"> {{ page.title }}</a>
	    </li>
	    {% endif %}
	    {% endfor %}
	  </ol>
	</div>
      </div>
    </div>
  </div>
</div>

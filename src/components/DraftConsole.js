var React = require('react');

module.exports = React.createClass({

	getInitialState: function () {

		return { selectedHeroes: [] };

	},

	renderSelectedHeroes: function () {

		return this.state.selectedHeroes.map(function (hero) {

			hero.formattedName = hero.name.replace('npc_dota_hero_', '');

			return (

				<li className={"draftConsole--" + hero.status}>

					<div className="heroesGrid__avatar">

						<img src={'http://cdn.dota2.com/apps/dota2/images/heroes/' + hero.formattedName + '_hphover.png?v=3162717'} />

					</div>

					<label>{hero.status}</label>

				</li>

			);

		});

	},

	render: function () {

		var selectedHeroes = this.renderSelectedHeroes();

		return (

			<div>

				<ul className="draftConsole__placeholder">

					<li>
						<label className="draftConsole__teamLabel">Team 1</label>
						<label>Ban</label>
					</li>
					<li>
						<label className="draftConsole__teamLabel">Team 2</label>
						<label>Ban</label>
					</li>
					<li>
						<label className="draftConsole__teamLabel">Team 1</label>
						<label>Pick</label>
					</li>
					<li>
						<label className="draftConsole__teamLabel">Team 2</label>
						<label>Pick</label>
					</li>
					<li>
						<label className="draftConsole__teamLabel">Team 1</label>
						<label>Ban</label>
					</li>
					<li>
						<label className="draftConsole__teamLabel">Team 2</label>
						<label>Ban</label>
					</li>
					<li>
						<label className="draftConsole__teamLabel">Team 1</label>
						<label>Pick</label>
					</li>
					<li>
						<label className="draftConsole__teamLabel">Team 2</label>
						<label>Pick</label>
					</li>

				</ul>

				<ul className="draftConsole__selectedHeroes">

					{selectedHeroes}

				</ul>

			</div>

		);

		// <ul class="draft-console-selected-heroes">

		// 	<% _.each(selectedHeroes, function(selectedHero) { %>

		// 		<li class="draft-console-<%=selectedHero.status%>">

		// 			<div class="hero-image-holder">

		// 				<img src="http://cdn.dota2.com/apps/dota2/images/heroes/<%=selectedHero.formattedName%>_hphover.png?v=3162717" />

		// 			</div>

		// 			<label><%=selectedHero.status%></label>

		// 		</li>

		// 	<%});%>

		// </ul>

	}

});
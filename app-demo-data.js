export function GetTotalArtsCount() {
	return ARTS.length
}

export function GetPagination(data, page, offset) {
	if (data && page !== undefined) {
		return data.slice((page - 1) * offset, page * offset)
	} else {
		return ARTS
	}
}

export function GetAllArts() {
	return ARTS
}

export function GetFeaturedArts() {
	const featuredArts = ARTS.filter((art) => {
		return art.isFeatured === true
	})
	return featuredArts
}

export function GetArtById(id) {
	return ARTS.filter((art) => {
		return art.id === id
	})
}

export function GetFilteredArts(pageFilter) {
	const { year, month } = pageFilter
	let filteredArts = ARTS.filter((e) => {
		const eventDate = new Date(e.date)
		return eventDate.getMonth() === month - 1 && eventDate.getFullYear().toString() === pageFilter.year
	})
	return filteredArts
}

export function GetDisplayDates() {
	let dates = ARTS.map((o) => o.date)
	let filtered = ARTS.filter(({ date }, index) => {
		return !dates.includes(date, index + 1)
	})
	return filtered
		.map((o) => {
			return new Date(o.date).getMonth() + 1 + '/' + new Date(o.date).getFullYear()
		})
		.reduce((a, b) => {
			if (a.indexOf(b) < 0) a.push(b)
			return a
		}, [])
		.sort()
}

const ARTS = [
	{
		id: '4922c4cd-b7da-4f17-b134-cc8d9a06e1de',
		title: 'amoretto of Giorgi Timberlake',
		description: '`amoretto` of `Giorgi Timberlake`  Department of Art, Reformed Bible College.',
		location: '613 Summerview Parkway',
		date: '2021/03/19',
		image: 'https://picsum.photos/600/375',
		likes: 7972,
		views: 17964,
		isFeatured: true,
	},
	{
		id: 'ba524c83-021c-4b72-b9e7-26a73184787c',
		title: 'Brookner of Abby Joye',
		description: '`Brookner` of `Abby Joye` for Museum of History, University of Sassari.',
		location: '6602 Blue Bill Park Pass',
		date: '2021/03/17',
		image: 'https://picsum.photos/540/338',
		likes: 10621,
		views: 30591,
		isFeatured: true,
	},
	{
		id: 'b7cfd6f7-f7fe-4aab-9e72-902db6d7bad7',
		title: 'scherenschnitte by Nicoli Fernely',
		description: '`scherenschnitte` by `Nicoli Fernely` faculty at Museum of History, State University of New York Institute of Technology at Utica/Rome.',
		location: '8837 Ilene Way',
		date: '2021/03/17',
		image: 'http://unsplash.it/540/338',
		likes: 22275,
		views: 45153,
		isFeatured: true,
	},
	{
		id: 'a9d3df2b-dbd0-42c6-bf02-f79732b5f10a',
		title: 'kung fu by Maxy Bloy',
		description: '`kung fu` by `Maxy Bloy`  , Beijing Foreign Studies University.',
		location: '5619 Hoard Place',
		date: '2021/03/03',
		image: 'http://unsplash.it/720/450',
		likes: 18839,
		views: 16194,
		isFeatured: true,
	},
	{
		id: '8ed76734-0bb1-490a-aadb-8ad07d5d9054',
		title: 'barometry of Edyth Rockcliff',
		description: '`barometry` of `Edyth Rockcliff`  Museum of Art, ECAM - Institut Supérieur Industriel.',
		location: '58 Valley Edge Pass',
		date: '2021/03/02',
		image: 'https://picsum.photos/720/450',
		likes: 27927,
		views: 47868,
		isFeatured: false,
	},
	{
		id: '8d9b6405-df24-44e1-adf7-251f71a2e627',
		title: 'perspectography from Robbin Nekrews',
		description: '`perspectography` from `Robbin Nekrews`  Department of Art, Mazandaran University of Medical Science.',
		location: '1494 Manley Road',
		date: '2021/02/27',
		image: 'https://loremflickr.com/540/338',
		likes: 18124,
		views: 37979,
		isFeatured: true,
	},
	{
		id: '3dc4df2f-0826-4312-bd82-957f4f4ca166',
		title: 'photophony of Rocky Colliver',
		description: '`photophony` of `Rocky Colliver`  Museum of Art, American University of the Caribbean.',
		location: '4 Maywood Avenue',
		date: '2021/02/24',
		image: 'https://loremflickr.com/720/450',
		likes: 4692,
		views: 15984,
		isFeatured: false,
	},
	{
		id: 'cfe846c1-8295-40ee-850e-6e2651c7ad31',
		title: 'engraving by Sandye Gerriets',
		description: '`engraving` by `Sandye Gerriets`  , Universidad ORT Uruguay.',
		location: '6 Bayside Terrace',
		date: '2021/02/21',
		image: 'http://unsplash.it/720/450',
		likes: 5434,
		views: 13545,
		isFeatured: false,
	},
	{
		id: 'e2916661-6ded-49f3-b775-1f5a083e8539',
		title: 'photogalvanography from Murial Owain',
		description: '`photogalvanography` from `Murial Owain` for , Institute of Teachers Education, Ipoh.',
		location: '51243 Northland Hill',
		date: '2021/02/19',
		image: 'https://picsum.photos/720/450',
		likes: 4938,
		views: 49615,
		isFeatured: true,
	},
	{
		id: 'f990f63a-890e-49b8-be33-02f0dc622dba',
		title: 'classic by Kermie Barhams',
		description: '`classic` by `Kermie Barhams` faculty at , Northern Border University.',
		location: '347 Gale Lane',
		date: '2021/02/18',
		image: 'https://picsum.photos/540/338',
		likes: 6658,
		views: 8445,
		isFeatured: true,
	},
	{
		id: 'f530916a-64ff-4c42-9a88-88ea303bb347',
		title: 'representationalism of Dal Oldmeadow',
		description: '`representationalism` of `Dal Oldmeadow` of Museum of Art, University of Naples Federico II.',
		location: '5695 Fremont Road',
		date: '2021/02/10',
		image: 'http://unsplash.it/540/338',
		likes: 25441,
		views: 6280,
		isFeatured: true,
	},
	{
		id: 'e89071ee-4d6d-4fe5-807c-f79d733d56ac',
		title: 'primitivism of Cristy Leacock',
		description: '`primitivism` of `Cristy Leacock`  Museum of Art, Aristotle University of Thessaloniki.',
		location: '49773 Sheridan Alley',
		date: '2021/02/05',
		image: 'https://loremflickr.com/600/375',
		likes: 8538,
		views: 17349,
		isFeatured: true,
	},
	{
		id: 'a317b3ac-e254-4cf0-a47e-a2110f92435a',
		title: 'photogravurist of Agace Silveston',
		description: '`photogravurist` of `Agace Silveston` for Museum of Art and Culture, National Institute of Technology Kurukshetra.',
		location: '5388 Mitchell Center',
		date: '2021/02/03',
		image: 'https://loremflickr.com/540/338',
		likes: 29652,
		views: 47781,
		isFeatured: true,
	},
	{
		id: '4fc8b171-79ae-4085-b63e-94bfcaa8beaa',
		title: 'locksmithery of Darwin Chevins',
		description: '`locksmithery` of `Darwin Chevins`  Department of Art, University of Computer Studies, Yangon.',
		location: '98 Westport Plaza',
		date: '2021/02/01',
		image: 'http://unsplash.it/600/375',
		likes: 16995,
		views: 10580,
		isFeatured: false,
	},
	{
		id: 'ded3ae9c-d1e6-4fc7-ba90-6f624240a76c',
		title: 'seicento by Carson Ginley',
		description: '`seicento` by `Carson Ginley`  Museum of Art and History, University of Moncton, Shippagan.',
		location: '62557 Tony Parkway',
		date: '2021/01/27',
		image: 'http://unsplash.it/540/338',
		likes: 11652,
		views: 47828,
		isFeatured: false,
	},
	{
		id: '04f8a8e8-8b2c-41b9-89a0-c43317cde93f',
		title: 'opera from Paxon Well',
		description: '`opera` from `Paxon Well`  , Barton College.',
		location: '7802 Loftsgordon Trail',
		date: '2021/01/23',
		image: 'https://loremflickr.com/600/375',
		likes: 17198,
		views: 35683,
		isFeatured: true,
	},
	{
		id: 'a5f6e908-f116-4452-be19-3ee41277a7ef',
		title: 'chrysography from Garrick Wrankmore',
		description: '`chrysography` from `Garrick Wrankmore`  Museum of Art, Design Institute of San Diego.',
		location: '719 Ohio Crossing',
		date: '2021/01/18',
		image: 'https://picsum.photos/720/450',
		likes: 12929,
		views: 39512,
		isFeatured: false,
	},
	{
		id: 'd634b536-8819-42ba-ac70-15def8074f72',
		title: 'plastography from Mikol Channing',
		description: '`plastography` from `Mikol Channing`  Museum of Art, St. Anthony College of Nursing.',
		location: '16810 Elka Hill',
		date: '2021/01/16',
		image: 'https://loremflickr.com/540/338',
		likes: 13592,
		views: 17797,
		isFeatured: false,
	},
	{
		id: 'c56a0ea9-a9af-4656-8a9f-1fd0b71b5731',
		title: 'oneirocriticism from Gannon Franks',
		description: '`oneirocriticism` from `Gannon Franks`  Department of Art and Culture, Universidad Nacional de Santiago del Estero.',
		location: '100 Darwin Plaza',
		date: '2021/01/09',
		image: 'http://unsplash.it/600/375',
		likes: 5282,
		views: 7878,
		isFeatured: false,
	},
	{
		id: '03bb7d59-3ef1-48e6-b85c-1d2a5c4fe1bb',
		title: 'mode of Raymond Hamm',
		description: '`mode` of `Raymond Hamm` student at Museum of Art and History, Nanjing University of Chemical Technology.',
		location: '6163 Derek Point',
		date: '2021/01/02',
		image: 'https://picsum.photos/720/450',
		likes: 16051,
		views: 8353,
		isFeatured: true,
	},
	{
		id: 'd4b16bc2-f88c-4ed2-9d31-6abde8951103',
		title: 'deco of Kelsey Minero',
		description: '`deco` of `Kelsey Minero`  History and Culture, Universidad Capitain General Gerardo Barrios.',
		location: '76753 Grover Parkway',
		date: '2020/12/18',
		image: 'http://unsplash.it/600/375',
		likes: 11016,
		views: 45069,
		isFeatured: false,
	},
	{
		id: 'a9efb551-0b57-4af4-83e5-0fb3492c0822',
		title: 'sugarcraft of Antonius Avramovsky',
		description: '`sugarcraft` of `Antonius Avramovsky`  Department of Art, Kaplan University.',
		location: '52 Sommers Park',
		date: '2020/12/16',
		image: 'http://unsplash.it/720/450',
		likes: 25543,
		views: 24599,
		isFeatured: false,
	},
	{
		id: '70473770-792b-4a6b-80ba-030d5c44ec2b',
		title: 'artful of Adele Brook',
		description: '`artful` of `Adele Brook` for Museum of Art, Moscow State University of Technology (Stankin).',
		location: '47586 Maple Alley',
		date: '2020/12/14',
		image: 'https://loremflickr.com/720/450',
		likes: 8643,
		views: 16153,
		isFeatured: false,
	},
	{
		id: '662093b6-5e2b-4362-a912-3c47852467e1',
		title: 're-rendering of Elnore Ottery',
		description: '`re-rendering` of `Elnore Ottery` faculty at Department of Art and Culture, Moldova Cooperative Trade University.',
		location: '32 Autumn Leaf Circle',
		date: '2020/12/12',
		image: 'http://unsplash.it/600/375',
		likes: 23585,
		views: 18455,
		isFeatured: false,
	},
	{
		id: '71fa652e-36d0-445d-b43b-30ee1d757b9b',
		title: 'physically from Otis Tipton',
		description: '`physically` from `Otis Tipton`  Museum of Art, Saad College of Nursing and Allied Health Sciences.',
		location: '892 Rigney Road',
		date: '2020/12/09',
		image: 'https://loremflickr.com/600/375',
		likes: 6018,
		views: 21526,
		isFeatured: false,
	},
	{
		id: '7ce085d8-4003-40ee-9668-eb9899da6535',
		title: 'salesmanship of Nalani Whitticks',
		description: '`salesmanship` of `Nalani Whitticks`  Museum of Art and History, Jain University, Centre for Management Studies.',
		location: '0561 Sachs Park',
		date: '2020/12/09',
		image: 'http://unsplash.it/540/338',
		likes: 25214,
		views: 49676,
		isFeatured: false,
	},
	{
		id: 'd84e7fd0-4a6f-42b7-8309-cebdef0fd73d',
		title: 'jugglery by Florette Giacomucci',
		description: '`jugglery` by `Florette Giacomucci` for Department of Art and Culture, Tama Institute of Management and Information Sciences.',
		location: '1 Linden Center',
		date: '2020/12/04',
		image: 'https://picsum.photos/540/338',
		likes: 14403,
		views: 23956,
		isFeatured: true,
	},
	{
		id: 'a9ebfb01-81c8-4e84-b928-efd0372b5e1d',
		title: 'seicento by Carmina Veel',
		description: '`seicento` by `Carmina Veel`  Museum of Art and History, Rajamangala University of Technology, Lanna Nan.',
		location: '76629 Lakewood Circle',
		date: '2020/11/29',
		image: 'https://loremflickr.com/720/450',
		likes: 22936,
		views: 5308,
		isFeatured: true,
	},
	{
		id: '82c370ea-1173-4eda-836e-cb07db3d957f',
		title: 'train from Lewiss Bauduccio',
		description: '`train` from `Lewiss Bauduccio`  Museum of Art and Culture, Heilongjiang August 1st Reclamation University.',
		location: '2 Sundown Circle',
		date: '2020/11/22',
		image: 'https://loremflickr.com/540/338',
		likes: 9578,
		views: 43521,
		isFeatured: false,
	},
	{
		id: '153d6b8a-5e89-411c-8487-4365f7db5bac',
		title: 'stereotypery by Patricio Blakeslee',
		description: '`stereotypery` by `Patricio Blakeslee`  Museum of Art, Université de Toulouse-le-Mirail (Toulouse II).',
		location: '40 Holy Cross Road',
		date: '2020/11/21',
		image: 'http://unsplash.it/540/338',
		likes: 16810,
		views: 33636,
		isFeatured: true,
	},
	{
		id: 'ffaa63cd-4861-42d7-95e3-aa3c14e562a9',
		title: 'founding from Tara Marsh',
		description: '`founding` from `Tara Marsh`  Department of Art, Tomas Bata University in Zlin.',
		location: '27769 Morning Circle',
		date: '2020/11/12',
		image: 'http://unsplash.it/720/450',
		likes: 29288,
		views: 47664,
		isFeatured: false,
	},
	{
		id: '87393473-d9e5-4af2-a298-0e37b2caa080',
		title: 'woodworking by Quinton Capell',
		description: '`woodworking` by `Quinton Capell`  Department of Art and Culture, Victoria University.',
		location: '50 Division Alley',
		date: '2020/11/09',
		image: 'https://picsum.photos/600/375',
		likes: 6961,
		views: 31213,
		isFeatured: false,
	},
	{
		id: '7f61e1d8-d3d1-4d67-8f21-f937c3b22ffe',
		title: 'cellocut by Garvey MacClure',
		description: '`cellocut` by `Garvey MacClure`  Museum of Art and History, Universitas Paramadina Mulya.',
		location: '437 Corscot Alley',
		date: '2020/11/09',
		image: 'https://picsum.photos/720/450',
		likes: 6673,
		views: 20125,
		isFeatured: false,
	},
	{
		id: 'a6894380-3a1a-4c8a-9c33-81375e33341a',
		title: 'artful of Titus Van de Castele',
		description: '`artful` of `Titus Van de Castele`  , Fachhochschule Neubrandenburg.',
		location: '0 Sullivan Point',
		date: '2020/11/03',
		image: 'https://loremflickr.com/720/450',
		likes: 3496,
		views: 39343,
		isFeatured: false,
	},
	{
		id: 'd7498d13-b1ac-4d89-bb8c-6d8eedf14c89',
		title: 'artspeak of Quint Nesby',
		description: '`artspeak` of `Quint Nesby`  , Al-Yamamah College.',
		location: '754 Union Drive',
		date: '2020/11/02',
		image: 'https://loremflickr.com/720/450',
		likes: 22733,
		views: 45026,
		isFeatured: true,
	},
	{
		id: 'f911f317-b9d1-450c-bfe2-f33fa8e36aad',
		title: 'phantasmagoria from Brooke Mackett',
		description: '`phantasmagoria` from `Brooke Mackett`  Museum of History, Ghazni University.',
		location: '50922 Pond Terrace',
		date: '2020/10/27',
		image: 'https://picsum.photos/720/450',
		likes: 8049,
		views: 46492,
		isFeatured: false,
	},
	{
		id: '26bdb605-7a76-49c0-b2a1-f9ad9ca64f36',
		title: 'ship of Kenton Josskowitz',
		description: '`ship` of `Kenton Josskowitz` of Museum of Art and Culture, University of Medicine Magway.',
		location: '31793 Dorton Court',
		date: '2020/10/26',
		image: 'http://unsplash.it/540/338',
		likes: 14556,
		views: 44255,
		isFeatured: false,
	},
	{
		id: 'fdb3e453-b2ad-4b09-863a-4496ff0b7d10',
		title: 'grammar by Blondelle Greave',
		description: '`grammar` by `Blondelle Greave` student at Department of Art, Bilecik University.',
		location: '4 Red Cloud Point',
		date: '2020/10/21',
		image: 'https://loremflickr.com/720/450',
		likes: 15175,
		views: 19279,
		isFeatured: true,
	},
	{
		id: 'bfbe26af-d4f1-4e41-aac0-ad6dbbdf5c0a',
		title: 'Sa from Sonja Messruther',
		description: '`Sa` from `Sonja Messruther` faculty at Museum of Art and History, Ural State Conservatory.',
		location: '107 Lighthouse Bay Park',
		date: '2020/10/19',
		image: 'https://loremflickr.com/720/450',
		likes: 19460,
		views: 12317,
		isFeatured: false,
	},
	{
		id: '62b1040a-9b77-49d9-b569-6ee8da5b10fb',
		title: 'alloyage from Hoyt Matteo',
		description: '`alloyage` from `Hoyt Matteo`  Museum of Art, Urbana University.',
		location: '90026 Hoard Street',
		date: '2020/10/16',
		image: 'https://loremflickr.com/600/375',
		likes: 6464,
		views: 41119,
		isFeatured: true,
	},
	{
		id: '26202e69-749a-4f7d-87cb-d06abe66f8e2',
		title: 'hand art by Paulie Terbeck',
		description: '`hand art` by `Paulie Terbeck` of Museum of Art, Qom University of Technology.',
		location: '92098 Cottonwood Junction',
		date: '2020/10/15',
		image: 'http://unsplash.it/600/375',
		likes: 11340,
		views: 8831,
		isFeatured: false,
	},
	{
		id: '024efe75-338d-4829-91c7-18f9dc8386f0',
		title: 'forgery from Kin Domerq',
		description: "`forgery` from `Kin Domerq`  Museum of Art and Culture, Ecole Supérieure d'Electricité.",
		location: '2726 Clyde Gallagher Plaza',
		date: '2020/10/12',
		image: 'http://unsplash.it/600/375',
		likes: 20582,
		views: 35042,
		isFeatured: true,
	},
	{
		id: 'e9907e5a-4c5f-4fa4-ae86-58de85fde53e',
		title: 'foil of Odella Baggott',
		description: '`foil` of `Odella Baggott`  History and Culture, Caldwell College.',
		location: '3535 Cordelia Place',
		date: '2020/10/02',
		image: 'https://picsum.photos/720/450',
		likes: 10638,
		views: 12597,
		isFeatured: true,
	},
	{
		id: 'a7925be5-2974-47e9-ae0c-76bca274f33b',
		title: 'proficient of Devland McLauchlin',
		description: '`proficient` of `Devland McLauchlin`  Museum of Art and Culture, Slovak Medical University.',
		location: '71 Pankratz Park',
		date: '2020/10/01',
		image: 'https://picsum.photos/540/338',
		likes: 29300,
		views: 44147,
		isFeatured: false,
	},
	{
		id: '09ab788f-77de-422d-b82e-a0b9a5ea61ca',
		title: 'horticulture of Karlotta Denisyuk',
		description: '`horticulture` of `Karlotta Denisyuk` faculty at , Universitas Persada Indonesia Y.A.I.',
		location: '94 Bellgrove Junction',
		date: '2020/09/27',
		image: 'http://unsplash.it/600/375',
		likes: 5056,
		views: 43736,
		isFeatured: true,
	},
	{
		id: '246e8e8d-ceff-4253-b0d5-6ad2e920e66b',
		title: "theater [or] theatre from Anthony O'Sheils",
		description: "`theater [or] theatre` from `Anthony O'Sheils`  Museum of Art and History, Rivier College.",
		location: '9836 Utah Court',
		date: '2020/09/25',
		image: 'https://loremflickr.com/600/375',
		likes: 1037,
		views: 17331,
		isFeatured: true,
	},
	{
		id: '08e47621-2195-47cf-82cc-99347684ec11',
		title: 'optometry from Martguerita Josland',
		description: '`optometry` from `Martguerita Josland`  Museum of Art, Presbyterian University of East Africa.',
		location: '6 Holmberg Junction',
		date: '2020/09/21',
		image: 'http://unsplash.it/720/450',
		likes: 1149,
		views: 46911,
		isFeatured: true,
	},
	{
		id: 'e0ae7168-3c36-44c8-9c61-c3575ffd2b2c',
		title: 'construction from Keir Middis',
		description: '`construction` from `Keir Middis`  , East-Siberian State Institute of Culture.',
		location: '565 Gateway Terrace',
		date: '2020/09/01',
		image: 'http://unsplash.it/540/338',
		likes: 28926,
		views: 40867,
		isFeatured: false,
	},
	{
		id: '255945f6-6ec8-4024-9f87-7b673cc8086a',
		title: 'statesmancraft of Ashton Aslett',
		description: '`statesmancraft` of `Ashton Aslett`  Department of Art, Anhui University of Traditional Chinese Medicine.',
		location: '63 Prentice Court',
		date: '2020/08/31',
		image: 'https://picsum.photos/600/375',
		likes: 15327,
		views: 49240,
		isFeatured: true,
	},
	{
		id: '00151b04-8a19-47bc-b688-5c9fd0c10e38',
		title: 'relief from Yvonne Denniston',
		description: '`relief` from `Yvonne Denniston` for Museum of History, Pangasinan State University.',
		location: '3 Schurz Parkway',
		date: '2020/08/29',
		image: 'https://picsum.photos/540/338',
		likes: 10630,
		views: 15455,
		isFeatured: false,
	},
	{
		id: '7e202a3d-5fdb-423a-b778-d58384b94d8c',
		title: 'autotypy from Celinka Dimberline',
		description: '`autotypy` from `Celinka Dimberline` student at Museum of Art and History, Grace College.',
		location: '411 Blue Bill Park Park',
		date: '2020/08/20',
		image: 'http://unsplash.it/720/450',
		likes: 2424,
		views: 3431,
		isFeatured: false,
	},
	{
		id: '301a259d-69d8-4173-9390-a704c0f7cd1a',
		title: 'distill of Kayley Jiruch',
		description: '`distill` of `Kayley Jiruch`  Museum of History, William Tyndale College.',
		location: '055 Monica Pass',
		date: '2020/08/16',
		image: 'https://loremflickr.com/600/375',
		likes: 23321,
		views: 26334,
		isFeatured: true,
	},
	{
		id: 'ca76a3f4-938c-4b8c-a824-cfdd67d227a5',
		title: 'studio from Cherise Blaze',
		description: '`studio` from `Cherise Blaze` for Department of Art and Culture, Universidad Catolica del Maule.',
		location: '4256 Bonner Alley',
		date: '2020/08/16',
		image: 'https://picsum.photos/600/375',
		likes: 3363,
		views: 15541,
		isFeatured: true,
	},
	{
		id: 'fa7665f1-c161-4e9f-921b-464a68f1f50c',
		title: 'thorough of Daria MacTrustrie',
		description: '`thorough` of `Daria MacTrustrie` faculty at Museum of Art and History, University of Oulu.',
		location: '302 Sachtjen Lane',
		date: '2020/08/09',
		image: 'https://loremflickr.com/720/450',
		likes: 5192,
		views: 33318,
		isFeatured: false,
	},
	{
		id: '4712dce7-ca4d-45aa-a271-d58a05244e13',
		title: 'turtling from Analise McCorkell',
		description: '`turtling` from `Analise McCorkell`  History and Culture, Yaroslavl State Technical University.',
		location: '0426 Nelson Terrace',
		date: '2020/08/07',
		image: 'http://unsplash.it/720/450',
		likes: 16275,
		views: 27082,
		isFeatured: false,
	},
	{
		id: '3eefac59-f47b-404d-91e7-18fc39a0f00b',
		title: 'dramatization from Tildy Heinrici',
		description: "`dramatization` from `Tildy Heinrici`  Museum of Art, Xi'an Academy of Fine Art.",
		location: '437 Dorton Crossing',
		date: '2020/08/05',
		image: 'https://picsum.photos/540/338',
		likes: 21508,
		views: 19752,
		isFeatured: true,
	},
	{
		id: 'a371102a-ee1c-46c4-a096-e3ac935f68f4',
		title: 'Heron of Mariejeanne Robel',
		description: '`Heron` of `Mariejeanne Robel`  Department of Art, University of Limpopo.',
		location: '6 Fieldstone Point',
		date: '2020/08/02',
		image: 'https://loremflickr.com/540/338',
		likes: 21923,
		views: 21768,
		isFeatured: true,
	},
	{
		id: '1c62aa16-cedb-4e72-84bd-f2932af8b8ee',
		title: 'cultured by Gaven Gebb',
		description: '`cultured` by `Gaven Gebb`  History and Culture, Universidad Nacional Andrés Bello.',
		location: '45 Southridge Hill',
		date: '2020/07/29',
		image: 'https://loremflickr.com/540/338',
		likes: 3657,
		views: 33407,
		isFeatured: true,
	},
	{
		id: 'fcac7a04-8e07-43e7-b15b-72b403ff5e7e',
		title: 'founding from Gregoor Kaine',
		description: '`founding` from `Gregoor Kaine`  , National Institute of Technology, Rourkela.',
		location: '26 Declaration Drive',
		date: '2020/07/27',
		image: 'https://loremflickr.com/540/338',
		likes: 2583,
		views: 35262,
		isFeatured: false,
	},
	{
		id: '38165de6-61f2-4123-90d3-0498e1059db0',
		title: 'loom by Maurita Blethin',
		description: '`loom` by `Maurita Blethin`  Museum of Art and History, Nairobi Technical Training Institute .',
		location: '98 Nancy Circle',
		date: '2020/07/27',
		image: 'http://unsplash.it/600/375',
		likes: 12991,
		views: 29168,
		isFeatured: true,
	},
	{
		id: '8c964cbc-955e-40bd-b93f-c85920d74bcd',
		title: 'technique by Hazel Alcido',
		description: '`technique` by `Hazel Alcido`  Museum of Art and Culture, Odessa National Marine University.',
		location: '355 Barby Park',
		date: '2020/07/26',
		image: 'http://unsplash.it/540/338',
		likes: 16122,
		views: 7659,
		isFeatured: false,
	},
	{
		id: 'b33118b1-eebf-491c-b1d4-1552eac523ef',
		title: 'monochrome of Parke Brisley',
		description: '`monochrome` of `Parke Brisley`  Department of Art, Academy of International Economic and Political Relations, Gdynia.',
		location: '47903 Russell Pass',
		date: '2020/07/20',
		image: 'https://picsum.photos/720/450',
		likes: 28403,
		views: 8379,
		isFeatured: true,
	},
	{
		id: '80ecde82-0ecc-4486-a345-2bcd3b4d4bd4',
		title: 'carpentry by Melicent Jeaves',
		description: '`carpentry` by `Melicent Jeaves`  Department of Art, Hitec University.',
		location: '443 Bonner Trail',
		date: '2020/07/19',
		image: 'http://unsplash.it/600/375',
		likes: 21488,
		views: 22395,
		isFeatured: true,
	},
	{
		id: '6c41a9b1-87b6-4a7e-a5e6-52e21785a1e4',
		title: "gravery of Ingamar O'Nolan",
		description: "`gravery` of `Ingamar O'Nolan`  , Kabul University.",
		location: '16 Di Loreto Road',
		date: '2020/07/13',
		image: 'http://unsplash.it/540/338',
		likes: 8231,
		views: 31442,
		isFeatured: true,
	},
	{
		id: '4ad7600b-a524-4e12-91a8-851ce97fa18a',
		title: 'bookbinding by Nikolaus Gillio',
		description: '`bookbinding` by `Nikolaus Gillio`  Museum of Art and History, University of the West Indies St. Augustine.',
		location: '90 Carpenter Court',
		date: '2020/07/10',
		image: 'http://unsplash.it/540/338',
		likes: 16361,
		views: 40962,
		isFeatured: true,
	},
	{
		id: '6e8f06f6-bce8-43f8-a8b8-bcb9d631f374',
		title: 'andragogy by Job Stedall',
		description: '`andragogy` by `Job Stedall`  , Synergy University, Dubai Campus.',
		location: '34556 La Follette Point',
		date: '2020/07/10',
		image: 'https://loremflickr.com/720/450',
		likes: 1795,
		views: 47899,
		isFeatured: true,
	},
	{
		id: '837e9f9d-10cd-4e60-b991-4ca853f27b05',
		title: 'foil of Adelina Ishchenko',
		description: '`foil` of `Adelina Ishchenko`  Museum of History, Universität der Bundeswehr Hamburg.',
		location: '12069 Fieldstone Avenue',
		date: '2020/07/10',
		image: 'https://picsum.photos/600/375',
		likes: 25023,
		views: 29074,
		isFeatured: false,
	},
	{
		id: '94c8dae5-45da-4ff3-b5f8-27bf5ceb1443',
		title: 'op art of Grenville Sellar',
		description: '`op art` of `Grenville Sellar` for Museum of History, St. Petersburg State University of Economics and Finance.',
		location: '9 Vermont Circle',
		date: '2020/06/22',
		image: 'http://unsplash.it/720/450',
		likes: 14724,
		views: 27580,
		isFeatured: false,
	},
	{
		id: '2ec11966-f4db-4721-a074-e6ba0daa3916',
		title: 'phyllomorph of Matelda Tremoille',
		description: '`phyllomorph` of `Matelda Tremoille`  Museum of Art and Culture, Instituto Superior de Transportes e Comunicações.',
		location: '3004 Hazelcrest Junction',
		date: '2020/06/15',
		image: 'http://unsplash.it/720/450',
		likes: 14588,
		views: 10645,
		isFeatured: true,
	},
	{
		id: 'f5995351-b766-4f46-ad12-ed3e5fd49bca',
		title: 'abstractionism of Salomi Aubin',
		description: '`abstractionism` of `Salomi Aubin`  Museum of History, Universidad Nacional de Ucayali.',
		location: '79 Memorial Terrace',
		date: '2020/06/12',
		image: 'https://loremflickr.com/540/338',
		likes: 23973,
		views: 8428,
		isFeatured: true,
	},
	{
		id: '653514a1-d293-4e9b-8480-9964fad6ae24',
		title: 'chastity by Phillida Cornils',
		description: '`chastity` by `Phillida Cornils`  Department of Art, Kateb Institute of Higher Education.',
		location: '47945 Cardinal Way',
		date: '2020/06/08',
		image: 'https://picsum.photos/600/375',
		likes: 11738,
		views: 11859,
		isFeatured: false,
	},
	{
		id: 'a1c2fbc4-0fdc-49f3-b4dc-6492670f3861',
		title: 'art-educate from Sibyl Simko',
		description: '`art-educate` from `Sibyl Simko`  Museum of Art and Culture, Modern Institute of Managament.',
		location: '44559 Buell Way',
		date: '2020/06/03',
		image: 'https://loremflickr.com/720/450',
		likes: 3396,
		views: 45885,
		isFeatured: true,
	},
	{
		id: '409bec6c-95bc-46e1-b2c4-4c14199b00ae',
		title: 'scrimshaw of Robina Sorrie',
		description: '`scrimshaw` of `Robina Sorrie`  Museum of Art and History, Trinity College of Florida.',
		location: '40 Basil Court',
		date: '2020/06/03',
		image: 'http://unsplash.it/600/375',
		likes: 4578,
		views: 4960,
		isFeatured: false,
	},
	{
		id: '66c5898f-76d9-4332-8463-b03ee81d3c51',
		title: 'riding of Tommy Grangier',
		description: '`riding` of `Tommy Grangier`  Museum of Art and History, Kocaeli University.',
		location: '6 Packers Junction',
		date: '2020/06/01',
		image: 'https://loremflickr.com/720/450',
		likes: 27566,
		views: 33529,
		isFeatured: true,
	},
	{
		id: 'eb452418-f3fc-441e-9140-0b72ce2ba8ec',
		title: 'gumption from Aldridge Littlejohn',
		description: '`gumption` from `Aldridge Littlejohn`  , The Kingdom University.',
		location: '66 Oakridge Court',
		date: '2020/05/28',
		image: 'https://loremflickr.com/600/375',
		likes: 16645,
		views: 39711,
		isFeatured: true,
	},
	{
		id: '84741622-2c04-4a44-af36-8b53dbca1dd3',
		title: 'songcraft from Arch Wanek',
		description: '`songcraft` from `Arch Wanek`  Museum of History, Universidad Latinoamericana.',
		location: '31409 Westend Center',
		date: '2020/05/17',
		image: 'https://picsum.photos/600/375',
		likes: 4104,
		views: 46522,
		isFeatured: true,
	},
	{
		id: 'c37c9f33-01d3-4c31-930d-359a3866f4b2',
		title: 'washi by Hamel Bonefant',
		description: '`washi` by `Hamel Bonefant`  Museum of History, Universitas Bunda Mulia Jakarta.',
		location: '1054 Magdeline Point',
		date: '2020/05/15',
		image: 'https://picsum.photos/540/338',
		likes: 21216,
		views: 34883,
		isFeatured: false,
	},
	{
		id: 'd0891abb-4c7c-401d-a668-03c806003057',
		title: 'cartoonery from Gwenora Bierling',
		description: '`cartoonery` from `Gwenora Bierling`  Museum of Art, Uganda Christian University.',
		location: '88 Transport Street',
		date: '2020/05/13',
		image: 'https://loremflickr.com/540/338',
		likes: 1782,
		views: 40609,
		isFeatured: false,
	},
	{
		id: 'f7924af8-7a5f-4ca0-9bd8-0432954f4fae',
		title: 'secco by Marlie Nancekivell',
		description: '`secco` by `Marlie Nancekivell`  Department of Art, Universidade Estadual do Oeste do Paraná.',
		location: '447 Northland Drive',
		date: '2020/04/17',
		image: 'http://unsplash.it/600/375',
		likes: 21875,
		views: 44275,
		isFeatured: false,
	},
	{
		id: 'efad1d14-2db3-48fa-9a7d-466b5f6e45c9',
		title: 'unartistic by Florrie Bernadot',
		description: '`unartistic` by `Florrie Bernadot`  Museum of History, Instituto Politécnico de Beja.',
		location: '5 Kinsman Lane',
		date: '2020/04/13',
		image: 'http://unsplash.it/720/450',
		likes: 1272,
		views: 12701,
		isFeatured: false,
	},
	{
		id: '059db0b3-6ca3-469a-ae6f-30d2c354e997',
		title: 'pugilism by Hephzibah Liles',
		description: '`pugilism` by `Hephzibah Liles`  Museum of Art, Toccoa Falls College.',
		location: '2 Spohn Crossing',
		date: '2020/04/10',
		image: 'https://picsum.photos/540/338',
		likes: 15004,
		views: 5601,
		isFeatured: true,
	},
	{
		id: '8244d076-4d6b-4807-a891-2a03e72dac0f',
		title: 'musicography by Elsey Koppe',
		description: '`musicography` by `Elsey Koppe` student at Museum of History, Heartland Baptist Bible College.',
		location: '9 Michigan Lane',
		date: '2020/04/08',
		image: 'https://loremflickr.com/600/375',
		likes: 24929,
		views: 10768,
		isFeatured: true,
	},
	{
		id: '79d40667-6689-4500-85fc-8bd40c27705f',
		title: 'macramé of Ambrosius Lippiatt',
		description: '`macramé` of `Ambrosius Lippiatt`  Museum of Art, University of Hawaii - West Oahu.',
		location: '2 Harbort Parkway',
		date: '2020/04/07',
		image: 'https://loremflickr.com/600/375',
		likes: 29158,
		views: 45320,
		isFeatured: true,
	},
	{
		id: '5532dbc8-b226-489e-b65c-84cb059a4fac',
		title: 'psychometrize by Raymund Borrow',
		description: '`psychometrize` by `Raymund Borrow` student at Department of Art, Universidade Metodista de Piracicaba.',
		location: '1 Bartelt Avenue',
		date: '2020/04/05',
		image: 'https://loremflickr.com/540/338',
		likes: 18108,
		views: 43560,
		isFeatured: false,
	},
	{
		id: '43546c69-6646-4471-bcd8-046ec8cfea16',
		title: 'balsamation of Deidre Silverlock',
		description: '`balsamation` of `Deidre Silverlock`  Department of Art, Clarke College.',
		location: '3 Randy Avenue',
		date: '2020/04/03',
		image: 'http://unsplash.it/540/338',
		likes: 3769,
		views: 17957,
		isFeatured: true,
	},
	{
		id: 'c21ec8da-d01b-45ba-a92f-e8745ea3ac0a',
		title: 'first lady from Tildy Lawrie',
		description: '`first lady` from `Tildy Lawrie`  Museum of Art, Amirkabir College of Managmant & Technology.',
		location: '48921 Shasta Circle',
		date: '2020/04/02',
		image: 'http://unsplash.it/540/338',
		likes: 25509,
		views: 32305,
		isFeatured: true,
	},
	{
		id: '1266abd3-d746-4b41-8431-cf4ffdce09d1',
		title: 'chronometry from Manya Upham',
		description: '`chronometry` from `Manya Upham`  , Riga Teacher Training and Educational Management Academy.',
		location: '7855 Chive Pass',
		date: '2020/03/28',
		image: 'https://picsum.photos/600/375',
		likes: 17155,
		views: 48598,
		isFeatured: false,
	},
	{
		id: 'fec90ce2-efa7-40a3-b063-048faf228fbf',
		title: 'balloonry of Hobard Dominiak',
		description: '`balloonry` of `Hobard Dominiak` for Museum of History, University of Calabar.',
		location: '16 Ludington Center',
		date: '2020/03/22',
		image: 'https://picsum.photos/720/450',
		likes: 11786,
		views: 43953,
		isFeatured: true,
	},
	{
		id: '4342e06e-acc4-4e0f-bef0-a3ff2a39ca78',
		title: 'orthometry by Annabell Adamik',
		description: '`orthometry` by `Annabell Adamik`  Department of Art and Culture, Al Akhawayn University.',
		location: '8 Trailsway Court',
		date: '2020/03/18',
		image: 'https://loremflickr.com/720/450',
		likes: 7999,
		views: 34650,
		isFeatured: true,
	},
	{
		id: '88e50879-d0fa-4fe3-acee-b6cd67331672',
		title: 'puppetry by Molli Dimock',
		description: '`puppetry` by `Molli Dimock`  Department of Art, Indiana University at Kokomo.',
		location: '76 Prentice Point',
		date: '2020/03/13',
		image: 'https://picsum.photos/540/338',
		likes: 6122,
		views: 8099,
		isFeatured: false,
	},
	{
		id: 'cec136d2-1b6b-4bea-ba2a-2aaf78ef2fc9',
		title: 'masonry from Nelia Cornwell',
		description: '`masonry` from `Nelia Cornwell`  Department of Art, Universidade Metropolitana de Santos.',
		location: '2686 Elka Pass',
		date: '2020/03/13',
		image: 'https://loremflickr.com/600/375',
		likes: 22413,
		views: 40607,
		isFeatured: false,
	},
	{
		id: '6e07952a-92df-4de1-82c6-e7215f1ac699',
		title: 'effort of Robbert Itzcovichch',
		description: '`effort` of `Robbert Itzcovichch`  Museum of Art and History, Louisiana State University at Alexandria.',
		location: '38 Amoth Plaza',
		date: '2020/03/05',
		image: 'https://loremflickr.com/600/375',
		likes: 15362,
		views: 6795,
		isFeatured: false,
	},
	{
		id: '2d48659d-ed83-4fa1-be25-ae984d2ae53f',
		title: 'boatmanship of Rodolfo Goreway',
		description: '`boatmanship` of `Rodolfo Goreway`  Department of Art, State University of New York College of Optometry.',
		location: '97 Marcy Drive',
		date: '2020/03/01',
		image: 'http://unsplash.it/600/375',
		likes: 7655,
		views: 17467,
		isFeatured: false,
	},
	{
		id: '29b70a15-bc80-4f34-8471-a1d2a6010c40',
		title: 'aeronautics of Sherlocke Kitchen',
		description: '`aeronautics` of `Sherlocke Kitchen` student at Department of Art and Culture, Hodeidah University.',
		location: '6 Rieder Parkway',
		date: '2020/02/28',
		image: 'http://unsplash.it/600/375',
		likes: 1026,
		views: 24168,
		isFeatured: true,
	},
	{
		id: '83675792-3af6-4f2d-b356-bab03aed15b6',
		title: 'ekphrasis by Shaw Rolstone',
		description: '`ekphrasis` by `Shaw Rolstone` for , University of the Visayas.',
		location: '45 Hoard Alley',
		date: '2020/02/15',
		image: 'http://unsplash.it/600/375',
		likes: 19410,
		views: 30875,
		isFeatured: true,
	},
	{
		id: '37cb921e-5fb6-4596-a32d-a73bde141a8f',
		title: 'RCA by Cesaro Pilpovic',
		description: '`RCA` by `Cesaro Pilpovic`  , St. Petersburg State Institute of Technology (Technological University).',
		location: '366 Texas Drive',
		date: '2020/02/05',
		image: 'https://picsum.photos/600/375',
		likes: 17079,
		views: 17820,
		isFeatured: true,
	},
	{
		id: '56ede77f-8c31-4d68-8aeb-b44eaff04d98',
		title: 'rejective art of Tucky Shemilt',
		description: '`rejective art` of `Tucky Shemilt`  Museum of Art and History, Universidad Cientifica del Sur.',
		location: '28318 Esch Plaza',
		date: '2020/01/18',
		image: 'http://unsplash.it/540/338',
		likes: 9577,
		views: 4206,
		isFeatured: false,
	},
	{
		id: '7b3bd49b-a0c2-45ed-999d-8e17dfe485bd',
		title: 'draft by Randi Djuricic',
		description: '`draft` by `Randi Djuricic` for Museum of Art and Culture, Universität Mozarteum Salzburg.',
		location: '78 Swallow Street',
		date: '2020/01/17',
		image: 'http://unsplash.it/720/450',
		likes: 10309,
		views: 42785,
		isFeatured: false,
	},
	{
		id: 'e894947c-cf45-413f-b087-42a1723e53a9',
		title: 'glyptography of Scarface Konmann',
		description: "`glyptography` of `Scarface Konmann`  Museum of History, Ecole Supérieure d'Ingénieurs et de Techniciens pour l'Agriculture.",
		location: '9 Fairview Drive',
		date: '2020/01/10',
		image: 'http://unsplash.it/540/338',
		likes: 11794,
		views: 48389,
		isFeatured: false,
	},
	{
		id: '99023080-05e8-4bba-b62a-8e5af837dccf',
		title: 'art brut of Bessie Brosoli',
		description: '`art brut` of `Bessie Brosoli`  History and Culture, Bogor Agricultural University.',
		location: '7721 Portage Trail',
		date: '2020/01/01',
		image: 'https://loremflickr.com/600/375',
		likes: 3865,
		views: 27088,
		isFeatured: false,
	},
]

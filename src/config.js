import Publisher from './SearchFacets/Publisher';
import Format from './SearchFacets/Format';
import Region from './SearchFacets/Region';
import Temporal from './SearchFacets/Temporal';

const config = {
        searchApiBaseUrl: 'http://magda-search-api-dev.terria.io/',
        facetListSize: 5,
        resultsPerPage: 10,
        descriptionLength: 50,
        downloadLinksSize: 3,
        exampleSearch: [
          'Business Names by ASIC as CSV',
          'Geocoded National Address File',
          'By Australian Charities and Not-for-profits Commission',
          'Taxation Statistics from 2013',
          'Trees in Victoria',
          'Budget from 2016 to 2017 by Department of Finance',
          'Planning as WMS'
        ],
        facets: [{id: 'publisher', component: Publisher},
                 {id: 'region', component: Region},
                 {id: 'temporal', component: Temporal},
                 {id: 'format', component: Format}
               ],
        headerNavigation: ["search", "projects", "publishers", "about"],
        footerNavigation: [{category: "Search", links: ["Search syntax", "Data sources", "Publishers"]},
                    {category: "Projects", links: ["Browse projects", "start a projects"]},
                    {category: "Publishers", links: ["Publisher index", "Open data toolkit"]},
                    {category: "Developers", links: ["Archetecture", "API doc"]},
                    {category: "About", links: ["About data.gov.au", "Contact us", "Blog"]},
                    {category: "Feedback", links: ["How can we imporve data.gov.au"]}]
        }

 export{config}

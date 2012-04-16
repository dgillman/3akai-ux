define(["config/dynamicconfig"], function(config) {

    /**
     * rSmart default customizations
     */

    // Add some custom URLs
    config.URL.SEARCH_USERS_GROUPS_KNOWN = "/var/search/usersgroups-known.json";
    config.URL.USER_EMAIL_EXISTENCE_SERVICE = "/system/userManager/user.emailexists.html?email=__EMAIL__";
    config.URL.TINY_MCE_CONTENT_CSS += ",/dev/skins/rsmart/skin.css";

    // Delete sections we don't want in the default
    delete config.Profile.configuration.defaultConfig.basic.elements.role;
    delete config.Profile.configuration.defaultConfig.basic.elements.department;
    delete config.Profile.configuration.defaultConfig.basic.elements.college;
    delete config.Profile.configuration.defaultConfig.aboutme.elements.hobbies;

    // Modify the orders of the profile sections
    config.Profile.configuration.defaultConfig.aboutme.order = 2;
    config.Profile.configuration.defaultConfig.publications.order = 5;
    config.defaultpubstructure.structure0.memberships._view = "contacts";
    config.defaultpubstructure.structure0.contacts._view = "contacts";

    // Addd some profile sections
    config.Profile.configuration.defaultConfig.online = {
        "label": "__MSG__PROFILE_ONLINE_LABEL__",
        "required": false,
        "display": true,
        "access": "everybody",
        "modifyacl": true,
        "permission": "anonymous",
        "multiple": true,
        "multipleLabel": "__MSG__PROFILE_ONLINE_LABEL__",
        "order": 3,
        "elements": {
            "siteOnline": {
                "label": "__MSG__PROFILE_ONLINE_SITE_LABEL__",
                "errorMessage": "__MSG__PROFILE_ONLINE_SITE_ERROR__",
                "required": true,
                "display": true,
                "example": "__MSG__PROFILE_ONLINE_SITE_EXAMPLE__"
            },
            "urlOnline": {
                "label": "__MSG__PROFILE_ONLINE_URL_LABEL__",
                "errorMessage": "__MSG__PROFILE_ONLINE_URL_ERROR__",
                "required": true,
                "display": true,
                "example": "__MSG__PROFILE_ONLINE_URL_EXAMPLE__"
            }
        }
    };
    config.Profile.configuration.defaultConfig.contact = {
        "label": "__MSG__PROFILE_CONTACT_LABEL__",
        "required": false,
        "display": true,
        "access": "everybody",
        "modifyacl": true,
        "permission": "anonymous",
        "multiple": false,
        "order": 4,
        "elements": {
            "college": {
                "label": "__MSG__PROFILE_BASIC_COLLEGE_LABEL__",
                "required": false,
                "display": true
            },
            "department": {
                "label": "__MSG__PROFILE_BASIC_DEPARTMENT_LABEL__",
                "required": false,
                "display": true
            },
            "role": {
                "label": "__MSG__PROFILE_BASIC_ROLE_LABEL__",
                "required": false,
                "display": true
            },
            "emailContact": {
                "label": "__MSG__PROFILE_CONTACT_EMAIL_LABEL__",
                "errorMessage": "__MSG__PROFILE_CONTACT_EMAIL_ERROR__",
                "required": false,
                "display": true,
                "type": "email"
            },
            "imContact": {
                "label": "__MSG__PROFILE_CONTACT_IM_LABEL__",
                "required": false,
                "display": true
            },
            "phoneContact": {
                "label": "__MSG__PROFILE_CONTACT_PHONE_LABEL__",
                "required": false,
                "display": true
            },
            "mobileContact": {
                "label": "__MSG__PROFILE_CONTACT_MOBILE_LABEL__",
                "required": false,
                "display": true
            },
            "faxContact": {
                "label": "__MSG__PROFILE_CONTACT_FAX_LABEL__",
                "required": false,
                "display": true
            },
            "addressContact": {
                "label": "__MSG__PROFILE_CONTACT_ADDRESS_LABEL__",
                "required": false,
                "display": true
            },
            "cityContact": {
                "label": "__MSG__PROFILE_CONTACT_CITY_LABEL__",
                "required": false,
                "display": true
            },
            "stateContact": {
                "label": "__MSG__PROFILE_CONTACT_STATE_LABEL__",
                "required": false,
                "display": true
            },
            "postalContact": {
                "label": "__MSG__PROFILE_CONTACT_POSTAL_LABEL__",
                "required": false,
                "display": true
            },
            "countryContact": {
                "label": "__MSG__PROFILE_CONTACT_COUNTRY_LABEL__",
                "required": false,
                "display": true
            }
        }
    };

    // 404 Error Page configuration
    config.ErrorPage.Links.getInTouch = [{
        "title": "SEND_US_YOUR_FEEDBACK",
        "url": "javascript:;",
        "id" : "feedback"
    }];

    // Remove the first two leftLinks in the footer
    config.Footer.leftLinks.splice(0,2);
    // Remove the ideainformer link
    config.Footer.leftLinks.splice(1,1);
    // Add in the user agreement to the left links in the footer
    config.Footer.leftLinks.push({
        "title": "__MSG__USER_AGREEMENT__",
        "href": "http://www.rsmart.com/agreement",
        "newWindow": true
    });

    // Directory configuration
    config.Directory = {
        "01":{title:"Agriculture",children:{
            "01.09":{title:"Animal Sciences"},
            "01.10":{title:"Food Sciences"},
            "01.11":{title:"Plant Sciences"},
            "01.12":{title:"Soil Sciences"}
        }},"04":{title:"Architecture & Planning",children:{
            "04.03":{title:"City, Urban, Community & Regional Planning"},
            "04.04":{title:"Environmental Design"},
            "04.05":{title:"Interior Architecture"},
            "04.06":{title:"Landscape Architecture"},
            "04.10":{title:"Real Estate Development"}
        }},"50":{title:"Arts & Music",children:{
            "50.0506":{title:"Acting"},
            "50.0703":{title:"Art History, Criticism & Conservation"},
            "50.0704":{title:"Arts Management"},
            "50.10":{title:"Arts, Entertainment, & Media Management"},
            "50.0302":{title:"Ballet"},
            "50.0914":{title:"Brass Instruments"},
            "50.0711":{title:"Ceramic Arts & Ceramics"},
            "50.0602":{title:"Cinematography & Film/Video Production"},
            "50.0402":{title:"Commercial & Advertising Art"},
            "50.0406":{title:"Commercial Photography"},
            "50.0906":{title:"Conducting"},
            "50.0510":{title:"Costume Design"},
            "50.02":{title:"Crafts/Craft Design, Folk Art & Artisanry"},
            "50.03":{title:"Dance"},
            "50.04":{title:"Design & Applied Arts"},
            "50.0102":{title:"Digital Arts"},
            "50.0507":{title:"Directing & Theatrical Production"},
            "50.0607":{title:"Documentary Production"},
            "50.05":{title:"Drama/Theatre Arts & Stagecraft"},
            "50.0705":{title:"Drawing"},
            "50.0407":{title:"Fashion/Apparel Design"},
            "50.0712":{title:"Fiber, Textile & Weaving Arts"},
            "50.0601":{title:"Film/Cinema/Video Studies"},
            "50.1002":{title:"Fine & Studio Arts Management"},
            "50.0411":{title:"Game & Interactive Media Design"},
            "50.0409":{title:"Graphic Design"},
            "50.0410":{title:"Illustration"},
            "50.0404":{title:"Industrial & Product Design"},
            "50.0408":{title:"Interior Design"},
            "50.0706":{title:"Intermedia/Multimedia"},
            "50.0910":{title:"Jazz/Jazz Studies"},
            "50.0907":{title:"Keyboard Instruments"},
            "50.0713":{title:"Metal & Jewelry Arts"},
            "50.09":{title:"Music"},
            "50.0902":{title:"Music History, Literature, & Theory"},
            "50.0909":{title:"Music Management & Merchandising"},
            "50.0912":{title:"Music Pedagogy"},
            "50.0903":{title:"Music Performance"},
            "50.0913":{title:"Music Technology"},
            "50.0904":{title:"Music Theory & Composition"},
            "50.0509":{title:"Musical Theatre"},
            "50.0905":{title:"Musicology & Ethnomusicology"},
            "50.0708":{title:"Painting"},
            "50.0916":{title:"Percussion Instruments"},
            "50.0605":{title:"Photography"},
            "50.0504":{title:"Playwriting & Screenwriting"},
            "50.0710":{title:"Printmaking"},
            "50.0709":{title:"Sculpture"},
            "50.0911":{title:"Stringed Instruments"},
            "50.0502":{title:"Technical Theatre/Theatre Design & Technology"},
            "50.0505":{title:"Theatre Literature, History & Criticism"},
            "50.0508":{title:"Theatre/Theatre Arts Management"},
            "50.0908":{title:"Voice & Opera"},
            "50.0915":{title:"Woodwind Instruments"}
        }},"52":{title:"Business",children:{
            "52.03":{title:"Accounting & Related Services"},
            "52.02":{title:"Business Administration, Management & Operations"},
            "52.04":{title:"Business Operations Support & Assistant Services"},
            "52.05":{title:"Busines & Corporate Communications"},
            "52.06":{title:"Business & Managerial Economics"},
            "52.20":{title:"Construction Management"},
            "52.07":{title:"Entrepreneurial & Small Business Operations"},
            "52.08":{title:"Finance & Financial Management Services"},
            "52.09":{title:"Hospitality Administration & Management"},
            "52.10":{title:"Human Resources Management & Services"},
            "52.17":{title:"Insurance"},
            "52.11":{title:"International Business"},
            "52.12":{title:"Management Information Systems & Services"},
            "52.13":{title:"Management Sciences & Quantitative Methods"},
            "52.14":{title:"Marketing"},
            "52.15":{title:"Real Estate"},
            "52.18":{title:"Sales & Merchandising"},
            "52.16":{title:"Taxation"},
            "52.21":{title:"Telecommunications Management"}
        }},"09 10":{title:"Communications",children:{
            "10.0304":{title:"Animation, Interactive Technology, Video Graphics & Special Effects"},
            "10.03":{title:"Graphic Communications"},
            "09.04":{title:"Journalism"},
            "10.0201":{title:"Photographic & Film/Video Technology"},
            "09.09":{title:"Public Relations & Advertising"},
            "09.10":{title:"Publishing"},
            "10.0202":{title:"Radio & Television Broadcasting Technology"},
            "10.0203":{title:"Recording Arts Technology"}
        }},"11 25 30":{title:"Computers & Information",children:{
            "25.0103":{title:"Archives/Archival Administration"},
            "11.0102":{title:"Artificial Intelligence"},
            "25.0102":{title:"Children & Youth Library Services"},
            "11.02":{title:"Computer Programming"},
            "11.07":{title:"Computer Science"},
            "30.31":{title:"Human Computer Interaction"},
            "11.0104":{title:"Informatics"},
            "11.04":{title:"Information Science/Studies"},
            "11.0103":{title:"Information Technology"},
            "25.0101":{title:"Library & Information Science"},
            "25.01":{title:"Library Science & Administration"}
        }},"13 31 32 53":{title:"Education",children:{
            "13.1201":{title:"Adult & Continuing Education"},
            "13.02":{title:"Bilingual, Multilingual, & Multicultural Education"},
            "13.03":{title:"Curriculum & Instruction"},
            "32.0108":{title:"Developmental & Remedial English"},
            "32.0104":{title:"Developmental & Remedial Mathematics"},
            "13.1210":{title:"Early Childhood Education"},
            "13.04":{title:"Educational Administration & Supervision"},
            "13.06":{title:"Educational Assessment, Evaluation, & Research"},
            "13.05":{title:"Educational & Instructional Media Design"},
            "13.1202":{title:"Elementary Education"},
            "53.01":{title:"High School & Secondary Diploma Programs"},
            "13.07":{title:"International & Comparative Education"},
            "31.06":{title:"Outdoor Education"},
            "32.0109":{title:"Second Language Learning"},
            "13.1205":{title:"Secondary Education"},
            "13.10":{title:"Special Education"},
            "13.11":{title:"Student Counseling & Personnel Services"},
            "53.0103":{title:"Vocational Education"}
        }},"14":{title:"Engineering & Technology",children:{
            "14.02":{title:"Aerospace, Aeronautical & Astronautical Engineering"},
            "14.03":{title:"Agricultural Engineering"},
            "14.04":{title:"Architectural Engineering"},
            "14.05":{title:"Biomedical & Medical Engineering"},
            "14.06":{title:"Ceramic Sciences & Engineering"},
            "14.07":{title:"Chemical Engineering"},
            "14.08":{title:"Civil Engineering"},
            "14.09":{title:"Computer Engineering"},
            "14.10":{title:"Electrical, Electronics & Communications Engineering"},
            "14.14":{title:"Environmental & Environmental Health Engineering"},
            "14.39":{title:"Geological & Geophysical Engineering"},
            "14.35":{title:"Industrial Engineering"},
            "14.31":{title:"Materials Science"},
            "14.19":{title:"Mechanical Engineering"},
            "14.21":{title:"Mining & Mineral Engineering"},
            "15.16":{title:"Nanotechnology"},
            "14.22":{title:"Naval Architecture & Marine Engineering"},
            "14.23":{title:"Nuclear Engineering"},
            "14.27":{title:"Systems Engineering"}
        }},"54":{title:"History",children:{
            "54.0102":{title:"American History"},
            "54.0106":{title:"Asian History"},
            "54.0107":{title:"Canadian History"},
            "54.0103":{title:"European History"},
            "54.0108":{title:"Military History"},
            "54.0104":{title:"Science & Technology History"}
        }},"16 23":{title:"Languages & Literatures",children:{
            "16.02":{title:"African Languages & Literatures"},
            "16.0404":{title:"Albanian Language & Literature"},
            "23.07":{title:"American Literature"},
            "16.16":{title:"American Sign Language"},
            "16.1103":{title:"Ancient Near Eastern & Biblical Languages & Literatures"},
            "16.1202":{title:"Ancient/Classical Greek Language & Literature"},
            "16.1101":{title:"Arabic Language & Literature"},
            "16.1401":{title:"Australian, Oceanic, & Pacific Languages & Literatures"},
            "16.0401":{title:"Baltic Languages & Literatures"},
            "16.0704":{title:"Bengali Language & Literature"},
            "16.0408":{title:"Bosnian, Serbian, & Croatian Languages & Literatures"},
            "16.0405":{title:"Bulgarian Language & Literature"},
            "16.1403":{title:"Burmese Language & Literature"},
            "16.0907":{title:"Catalan Language & Literature"},
            "16.13":{title:"Celtic Languages & Literatures"},
            "23.1405":{title:"Children's & Adolescent Literature"},
            "16.0301":{title:"Chinese Language & Literature"},
            "16.12":{title:"Classics & Classical Languages & Literatures"},
            "16.0104":{title:"Comparative Literature"},
            "23.05":{title:"Creative Writing"},
            "16.0406":{title:"Czech Language & Literature"},
            "16.0503":{title:"Danish Language & Literature"},
            "16.0504":{title:"Dutch/Flemish Language & Literature"},
            "16.03":{title:"East Asian Languages & Literatures"},
            "23.04":{title:"English Composition"},
            "23":{title:"English Literature"},
            "16.1404":{title:"Filipino/Tagalog Language & Literature"},
            "16.0901":{title:"French Language & Literature"},
            "16.05":{title:"Germanic Languages & Literatures"},
            "16.1102":{title:"Hebrew Language & Literature"},
            "16.0701":{title:"Hindi Language & Literature"},
            "16.1503":{title:"Hungarian & Magyar Language & Literature"},
            "16.1402":{title:"Indonesian & Malay Languages & Literatures"},
            "16.08":{title:"Iranian & Persian Languages & Literatures"},
            "16.0902":{title:"Italian Language & Literature"},
            "16.0302":{title:"Japanese Language & Literature"},
            "16.1405":{title:"Khmer & Cambodian Language & Literature"},
            "16.0303":{title:"Korean Language & Literature"},
            "16.1406":{title:"Lao Language & Literature"},
            "16.1203":{title:"Latin Language & Literature"},
            "16.0102":{title:"Linguistics"},
            "23.14":{title:"Literature"},
            "16.11":{title:"Middle & Near Eastern & Semitic Languages & Literatures"},
            "16.06":{title:"Modern Greek Language & Literature"},
            "16.1504":{title:"Mongolian Language & Literature"},
            "16.10":{title:"Native American Languages & Literatures"},
            "16.0505":{title:"Norwegian Language & Literature"},
            "16.0407":{title:"Polish Language & Literature"},
            "16.0904":{title:"Portuguese Language & Literature"},
            "16.0705":{title:"Punjabi Language & Literature"},
            "16.09":{title:"Romance Languages & Literatures"},
            "16.0906":{title:"Romanian Language & Literature"},
            "16.0402":{title:"Russian Language & Literature"},
            "16.0702":{title:"Sanskrit & Classical Indian Languages & Literatures"},
            "16.0502":{title:"Scandinavian Languages & Literatures"},
            "16.0400":{title:"Slavic Languages & Literatures"},
            "16.0409":{title:"Slovak Language & Literature"},
            "16.07":{title:"South Asian Languages & Literatures"},
            "16.14":{title:"Southeast Asian, Australasian, & Pacific Languages & Literatures"},
            "16.0905":{title:"Spanish Language & Literature"},
            "23.10":{title:"Speech & Rhetorical Studies"},
            "16.0506":{title:"Swedish Language & Literature"},
            "16.0706":{title:"Tamil Language & Literature"},
            "23.11":{title:"Technical & Business Writing"},
            "16.1407":{title:"Thai Language & Literature"},
            "16.0304":{title:"Tibetan Language & Literature"},
            "16.15":{title:"Turkic, Uralic-Altaic, Caucasian, & Central Asian Languages & Literatures"},
            "16.1501":{title:"Turkish Language & Literature"},
            "16.0410":{title:"Ukrainian Language & Literature"},
            "16.1502":{title:"Uralic Languages & Literatures"},
            "16.0707":{title:"Urdu Language & Literature"},
            "16.1408":{title:"Vietnamese Language & Literature"}
        }},"22":{title:"Law",children:{
            "22.0205":{title:"Banking, Corporate, Finance, & Securities Law"},
            "22.0206":{title:"Comparative Law"},
            "22.0207":{title:"Energy, Environment, & Natural Resources Law"},
            "22.0208":{title:"Health Law"},
            "22.0212":{title:"Intellectual Property Law"},
            "22.0209":{title:"International Law & Legal Studies"},
            "22.01":{title:"Law"},
            "22.03":{title:"Legal Support Services"},
            "22.0001":{title:"Pre-Law Studies"},
            "22.0211":{title:"Tax Law & Taxation"}
        }},"32 34 36 53":{title:"Lifelong Learning",children:{
            "34.0104":{title:"Addiction Prevention & Treatment"},
            "53.0105":{title:"Adult & Continuing Education"},
            "36.0119":{title:"Aircraft Piloting"},
            "36.0110":{title:"Art"},
            "32.0110":{title:"Basic Computer Skills"},
            "34.0102":{title:"Birthing & Parenting"},
            "36.0103":{title:"Board, Card & Role-Playing Games"},
            "32.0107":{title:"Career Exploration"},
            "36.0111":{title:"Collecting"},
            "36.0113":{title:"Computer Games & Programming Skills"},
            "36.0112":{title:"Cooking & Other Domestic Skills"},
            "36.0114":{title:"Dancing"},
            "36.0102":{title:"Handicrafts & Model-Making"},
            "36.0105":{title:"Home Maintenance & Improvement"},
            "36.0115":{title:"Music"},
            "36.0106":{title:"Nature Appreciation"},
            "34.0103":{title:"Personal Health"},
            "36.0107":{title:"Pets"},
            "36.0116":{title:"Reading"},
            "36.0108":{title:"Sports & Exercise"},
            "36.0117":{title:"Theater"},
            "36.0109":{title:"Travel"},
            "32.0111":{title:"Workforce Development & Training"},
            "36.0118":{title:"Writing"}
        }},"27":{title:"Math",children:{
            "27.0102":{title:"Algebra & Number Theory"},
            "27.03":{title:"Applied Mathematics"},
            "27.0104":{title:"Geometry & Geometric Analysis"},
            "27.05":{title:"Statistics"},
            "27.0105":{title:"Topology & Foundations"}
        }},"51 31":{title:"Medicine & Health",children:{
            "51.33":{title:"Alternative & Complementary Medicine"},
            "51.32":{title:"Bioethics & Medical Ethics"},
            "51.01":{title:"Chiropractic"},
            "51.10":{title:"Clinical & Medical Laboratory Science & Research"},
            "51.02":{title:"Communication Disorders Sciences"},
            "51.04":{title:"Dentistry"},
            "51.31":{title:"Dietetics & Clinical Nutrition"},
            "51.37":{title:"Energy & Biologically Based Therapies"},
            "51.07":{title:"Health & Medical Administration"},
            "51.08":{title:"Health & Medical Assistance"},
            "51.11":{title:"Health & Medical Preparatory Programs"},
            "51.09":{title:"Health Diagnostics, Intervention & Treatment"},
            "31.05":{title:"Health, Physical Education & Fitness"},
            "51.27":{title:"Medical Illustration & Informatics"},
            "51.12":{title:"Medicine"},
            "51.15":{title:"Mental & Social Health"},
            "51.36":{title:"Movement & Mind-Body Therapies"},
            "51.16":{title:"Nursing"},
            "51.18":{title:"Ophthalmics & Optometrics"},
            "51.17":{title:"Optometry"},
            "51.19":{title:"Osteopathic Medicine"},
            "51.20":{title:"Pharmacy & Pharmaceutical Sciences"},
            "51.21":{title:"Podiatric Medicine"},
            "51.22":{title:"Public Health"},
            "51.23":{title:"Rehabilitation & Therapeutics"},
            "51.35":{title:"Somatic Bodywork"},
            "51.24":{title:"Veterinary Medicine"}
        }},"28 29 43":{title:"Military & Security",children:{
            "28.01":{title:"Air Force ROTC, Air Science & Operations"},
            "28.03":{title:"Army ROTC, Military Science & Operations"},
            "43.0102":{title:"Corrections"},
            "43.0104":{title:"Criminal Justice"},
            "43.0302":{title:"Crisis, Emergency & Disaster Management"},
            "43.0119":{title:"Critical Incident Response & Special Police Operations"},
            "43.0303":{title:"Critical Infrastructure Protection"},
            "43.0116":{title:"Cyber & Computer Forensics & Counterterrorism"},
            "43.0117":{title:"Financial Forensics & Fraud Investigation"},
            "43.02":{title:"Fire Protection"},
            "43.0203":{title:"Fire Science & Fire-fighting"},
            "43.0204":{title:"Fire Systems Technology"},
            "43.0205":{title:"Fire & Arson Investigation & Prevention"},
            "43.0106":{title:"Forensic Science & Technology"},
            "43.03":{title:"Homeland Security"},
            "29.02":{title:"Intelligence, Command Control & Information Operations"},
            "43.0122":{title:"Maritime Law Enforcement"},
            "28.07":{title:"Military Economics & Management"},
            "28.05":{title:"Military Science & Operational Studies"},
            "29.01":{title:"Military Technologies"},
            "28.04":{title:"Navy & Marine ROTC, Naval Science & Operations"},
            "43.0120":{title:"Protective Services Operations"},
            "28.06":{title:"Security Policy & Strategy"},
            "43.0304":{title:"Terrorism & Counterterrorism Operations"},
            "43.0206":{title:"Wildland & Forest Firefighting & Investigation"}
        }},"05 19 24 30":{title:"Multidisciplinary Studies",children:{
            "05.0101":{title:"African Studies"},
            "05.0201":{title:"African-American & Black Studies"},
            "05.0102":{title:"American Studies & Civilization"},
            "05.0103":{title:"Asian Studies & Civilization"},
            "05.0206":{title:"Asian-American Studies"},
            "05.0116":{title:"Balkans Studies"},
            "05.0117":{title:"Baltic Studies"},
            "05.0115":{title:"Canadian Studies"},
            "05.0119":{title:"Caribbean Studies"},
            "05.0123":{title:"Chinese Studies"},
            "30.22":{title:"Classical & Ancient Studies"},
            "05.0121":{title:"Commonwealth Studies"},
            "30.26":{title:"Cultural Studies, Critical Theory & Analysis"},
            "05.0211":{title:"Deaf Studies"},
            "05.0210":{title:"Disability Studies"},
            "05.0104":{title:"East Asian Studies"},
            "05.0106":{title:"European Studies & Civilization"},
            "05.0209":{title:"Folklore Studies"},
            "05.0124":{title:"French Studies"},
            "05.0208":{title:"Gay & Lesbian Studies"},
            "24.0102":{title:"General Studies"},
            "05.0125":{title:"German Studies"},
            "05.0203":{title:"Hispanic-American, Puerto Rican, & Mexican-American/Chicano Studies"},
            "30.12":{title:"Historic Preservation & Conservation"},
            "30.21":{title:"Holocaust & Related Studies"},
            "19.06":{title:"Housing & Human Environments"},
            "24.0103":{title:"Humanities & Humanistic Studies"},
            "30.23":{title:"Intercultural, Multicultural & Diversity Studies"},
            "30.20":{title:"International & Global Studies"},
            "05.0133":{title:"Irish Studies"},
            "05.0126":{title:"Italian Studies"},
            "05.0127":{title:"Japanese Studies"},
            "05.0128":{title:"Korean Studies"},
            "05.0134":{title:"Latin American & Caribbean Studies"},
            "30.13":{title:"Medieval & Renaissance Studies"},
            "30.14":{title:"Museology & Museum Studies"},
            "05.0202":{title:"Native American Studies"},
            "05.0108":{title:"Near & Middle Eastern Studies"},
            "05.0109":{title:"Pacific Area & Pacific Rim Studies"},
            "30.05":{title:"Peace Studies & Conflict Resolution"},
            "05.0129":{title:"Polish Studies"},
            "05.0105":{title:"Russian, Central European, East European & Eurasian Studies"},
            "05.0111":{title:"Scandinavian Studies"},
            "05.0118":{title:"Slavic Studies"},
            "05.0112":{title:"South Asian Studies"},
            "05.0113":{title:"Southeast Asian Studies"},
            "05.0130":{title:"Spanish & Iberian Studies"},
            "30.33":{title:"Sustainability Studies"},
            "30.06":{title:"Systems Science & Theory"},
            "05.0131":{title:"Tibetan Studies"},
            "05.0132":{title:"Ukraine Studies"},
            "05.0120":{title:"Ural-Altaic & Central Asian Studies"},
            "05.0114":{title:"Western European Studies"},
            "05.0207":{title:"Women's Studies"},
            "19.00":{title:"Work & Family Studies"}
        }},"26 30 40":{title:"Natural & Physical Sciences",children:{
            "40.0201":{title:"Astronomy"},
            "40.0202":{title:"Astrophysics"},
            "40.04":{title:"Atmospheric Sciences & Meteorology"},
            "40.0802":{title:"Atomic & Molecular Physics"},
            "26.02":{title:"Biochemistry, Biophysics & Molecular Biology"},
            "26.01":{title:"Biology"},
            "26.11":{title:"Biomathematics, Bioinformatics, & Computational Biology"},
            "26.12":{title:"Biotechnology"},
            "26.03":{title:"Botany & Plant Biology"},
            "26.04":{title:"Cellular Biology & Anatomical Sciences"},
            "40.05":{title:"Chemistry"},
            "30.25":{title:"Cognitive Science"},
            "26.1301":{title:"Ecology"},
            "26.13":{title:"Ecology, Evolution, Systematics, & Population Biology"},
            "26.08":{title:"Genetics"},
            "40.0606":{title:"Geochemistry & Petrology"},
            "40.06":{title:"Geological & Earth Sciences"},
            "40.0603":{title:"Geophysics & Seismology"},
            "40.0605":{title:"Hydrology & Water Resources Science"},
            "26.1302":{title:"Marine Biology & Biological Oceanography"},
            "40.10":{title:"Materials Sciences"},
            "26.05":{title:"Microbiological Sciences & Immunology"},
            "26.15":{title:"Neurobiology & Neurosciences"},
            "30.24":{title:"Neuroscience"},
            "40.0806":{title:"Nuclear Physics"},
            "40.0607":{title:"Oceanography"},
            "40.0807":{title:"Optics"},
            "40.0604":{title:"Paleontology"},
            "26.10":{title:"Pharmacology & Toxicology"},
            "40.08":{title:"Physics"},
            "26.09":{title:"Physiology, Pathology & Related Sciences"},
            "26.07":{title:"Zoology & Animal Biology"}
        }},"38 39":{title:"Philosophy & Religion",children:{
            "39.02":{title:"Bible & Biblical Studies"},
            "38.0202":{title:"Buddhist Studies"},
            "38.0203":{title:"Christian Studies"},
            "39.0602":{title:"Divinity & Ministry"},
            "38.0103":{title:"Ethics"},
            "38.0204":{title:"Hindu Studies"},
            "38.0205":{title:"Islamic Studies"},
            "38.0206":{title:"Jewish & Judaic Studies"},
            "39.0705":{title:"Lay Ministry"},
            "38.0102":{title:"Logic"},
            "39.03":{title:"Missionary Studies & Missiology"},
            "39.07":{title:"Pastoral Counseling & Specialized Ministries"},
            "38.01":{title:"Philosophy"},
            "39.0605":{title:"Rabbinical Studies"},
            "38.02":{title:"Religion & Religious Studies"},
            "39.04":{title:"Religious Education"},
            "39.05":{title:"Religious & Sacred Music"},
            "39.0606":{title:"Talmudic Studies"},
            "39.06":{title:"Theological & Ministerial Studies"},
            "39.0703":{title:"Urban Ministry"},
            "39.0704":{title:"Women's Ministry"},
            "39.0702":{title:"Youth Ministry"}
        }},"03 44":{title:"Public Policy & Administration",children:{
            "44.02":{title:"Community Organization & Advocacy"},
            "44.0502":{title:"Education Policy Analysis"},
            "03.03":{title:"Fishing & Fisheries"},
            "03.05":{title:"Forestry"},
            "44.0503":{title:"Health Policy Analysis"},
            "44.00":{title:"Human Services"},
            "44.0504":{title:"International Policy Analysis"},
            "44.04":{title:"Public Administration"},
            "44.05":{title:"Public Policy Analysis"},
            "44.07":{title:"Social Work"},
            "03.06":{title:"Wildlife & Wildlands"},
            "44.0702":{title:"Youth Services"}
        }},"45 42":{title:"Social Sciences",children:{
            "45.02":{title:"Anthropology"},
            "45.03":{title:"Archeology"},
            "45.04":{title:"Criminology"},
            "45.05":{title:"Demography & Population Studies"},
            "45.06":{title:"Economics"},
            "45.07":{title:"Geography & Cartography"},
            "45.09":{title:"International Relations & National Security Studies"},
            "45.10":{title:"Political Science & Government"},
            "42":{title:"Psychology"},
            "45.11":{title:"Sociology"},
            "45.12":{title:"Urban Studies & Affairs"}
        }},"12 19 46 47 48 49":{title:"Trades & Professions",children:{
            "49.0105":{title:"Air Traffic Control"},
            "47.0608":{title:"Aircraft Powerplant Technology"},
            "47.0607":{title:"Airframe Mechanics & Aircraft Maintenance & Repair"},
            "49.0106":{title:"Airline Flight Attendant"},
            "49.0102":{title:"Airline Pilot & Flight Crew"},
            "47.0614":{title:"Alternative Fuel Vehicle Technology"},
            "19.09":{title:"Apparel & Textiles"},
            "47.0604":{title:"Automotive Mechanics"},
            "49.0104":{title:"Aviation Management & Operations"},
            "47.0609":{title:"Avionics Maintenance & Repair"},
            "47.0610":{title:"Bicycle Mechanics & Repair"},
            "46.0505":{title:"Blasting & Blaster"},
            "48.08":{title:"Boilermaking & Boilermaker"},
            "46.04":{title:"Building & Construction Finishing, Management, & Inspection"},
            "46.0412":{title:"Building & Construction Site Management"},
            "46.0403":{title:"Building, Home & Construction Inspection"},
            "46.0401":{title:"Building & Property Maintenance"},
            "48.0703":{title:"Cabinetmaking & Millwork"},
            "46.02":{title:"Carpenters"},
            "46.0413":{title:"Carpet, Floor & Tile Worker"},
            "49.0303":{title:"Commercial Fishing"},
            "48.0510":{title:"Computer Numerically Controlled Machinist"},
            "46.0402":{title:"Concrete Finishing"},
            "49.0202":{title:"Construction, Heavy Equipment & Earthmoving Equipment Operation"},
            "12.04":{title:"Cosmetology"},
            "12.05":{title:"Culinary Arts"},
            "47.0605":{title:"Diesel Mechanics"},
            "49.0304":{title:"Diver, Professional & Instructor"},
            "46.0404":{title:"Drywall Installation"},
            "47.01":{title:"Electrical & Electronics Maintenance & Repair"},
            "46.0302":{title:"Electrician"},
            "47.0615":{title:"Engine Machinist"},
            "49.0207":{title:"Flagging & Traffic Control"},
            "49.0108":{title:"Flight Instruction"},
            "19.05":{title:"Foods, Nutrition & Related Services"},
            "12.03":{title:"Funeral Service & Mortuary Science"},
            "48.0702":{title:"Furniture Design & Manufacturing"},
            "46.0406":{title:"Glazing"},
            "47.0402":{title:"Gunsmithing"},
            "47.02":{title:"Heating, Air Conditioning, Ventilation & Refrigeration Maintenance & Repair"},
            "47.03":{title:"Heavy & Industrial Equipment Maintenance & Repair"},
            "47.0617":{title:"High Performance & Custom Engine Mechanics"},
            "46.0414":{title:"Insulator"},
            "48.0509":{title:"Ironworking"},
            "47.0403":{title:"Locksmithing & Safe Repair"},
            "48.0501":{title:"Machine Tool Technology & Machinist"},
            "47.0616":{title:"Marine Maintenance, Fitter & Ship Repair"},
            "49.0309":{title:"Marine Science & Merchant Marine Officer"},
            "49.03":{title:"Marine Transportation"},
            "46.01":{title:"Masonry"},
            "47.0613":{title:"Medium & Heavy Vehicle & Truck Technology"},
            "46.0411":{title:"Metal Building Assembly"},
            "48.0511":{title:"Metal Fabricator"},
            "49.0206":{title:"Mobile Crane Operation"},
            "47.0611":{title:"Motorcycle Maintenance & Repair"},
            "47.0404":{title:"Musical Instrument Fabrication & Repair"},
            "46.0408":{title:"Painting & Wall Covering"},
            "46.0502":{title:"Pipefitting & Sprinkler Fitting"},
            "46.0503":{title:"Plumbing"},
            "49.0208":{title:"Railroad & Railway Transportation"},
            "47.0618":{title:"Recreation Vehicle (RV) Service"},
            "46.0410":{title:"Roofing"},
            "48.0506":{title:"Sheet Metal Technology & Sheetworking"},
            "48.0304":{title:"Shoe, Boot & Leather Repair"},
            "47.0606":{title:"Small Engine Mechanics"},
            "48.0507":{title:"Tool & Die Technology"},
            "49.0205":{title:"Truck/Bus Driver & Commercial Vehicle Operator & Instructor"},
            "48.0303":{title:"Upholstery"},
            "47.0408":{title:"Watchmaking & Jewelrymaking"},
            "48.0508":{title:"Welding"},
            "46.0504":{title:"Well Drilling"},
            "48.07":{title:"Woodworking"}
    }}};

    /**
     * Institutional customizations
     */

    /**
     * Authentication settings
     */
    config.Authentication.internal = true;
    //config.Authentication.allowInternalAccountCreation = false;
    // config.Authentication.internalAndExternal = true;

    // config.Authentication.external = [{
    //     label: "Student and Faculty Login",
    //     url: "/system/trustedauth"
    // }];

    /*
     * Configure default user dashboard navigation and widgets.
     *
     * corresponds to ACAD-456
     */
    config.defaultprivstructure = {
        "structure0": {
            "dashboard": {
                "_ref": "${refid}0",
                "_title": "My Dashboard",
                "_order": 0,
                "_canEdit": true,
                "_reorderOnly": true,
                "_nonEditable": true,
                "main": {
                    "_ref": "${refid}0",
                    "_order": 0,
                    "_title": "Dashboard"
                }
            },
            "messages": {
                "_title": "My Messages",
                "_ref": "${refid}1",
                "_order": 1,
                "_canEdit": true,
                "_reorderOnly": true,
                "_canSubedit": true,
                "_nonEditable": true,
                "inbox": {
                    "_ref": "${refid}1",
                    "_order": 0,
                    "_title": "Inbox",
                    "_nonEditable": true
                },
                "invitations": {
                    "_ref": "${refid}2",
                    "_order": 1,
                    "_title": "Invitations",
                    "_nonEditable": true
                },
                "sent": {
                    "_ref": "${refid}3",
                    "_order": 2,
                    "_title": "Sent",
                    "_nonEditable": true
                },
                "trash": {
                    "_ref": "${refid}4",
                    "_order": 3,
                    "_title": "Trash",
                    "_nonEditable": true
                }
            }
        },
        "${refid}0": {
            "page": "<div class='fl-force-right'><button type='button' class='s3d-button s3d-margin"+
            "-top-5 s3d-header-button s3d-header-smaller-button dashboard_change_layout' dat"+
            "a-tuid='${refid}5'>Edit Layout</button><button type='button' class='s3d-button "+
            "s3d-margin-top-5 s3d-header-button s3d-header-smaller-button dashboard_global_a"+
            "dd_widget' data-tuid='${refid}5'>Add Widget</button></div><div class='s3d-conte"+
            "ntpage-title'>My Dashboard</div><div id='widget_dashboard_${refid}5' class='wid"+
            "get_inline'></div>"
        },
        "${refid}1": {
            "page": "<div id='widget_inbox_${refid}6' class='widget_inline'/>"
        },
        "${refid}2": {
            "page": "<div id='widget_inbox_${refid}7' class='widget_inline'/>"
        },
        "${refid}3": {
            "page": "<div id='widget_inbox_${refid}8' class='widget_inline'/>"
        },
        "${refid}4": {
            "page": "<div id='widget_inbox_${refid}9' class='widget_inline'/>"
        },
        "${refid}5": {
            "dashboard": {
                "layout": "threecolumn",
                "columns": {
                    "column1": [{
                        "uid": "${refid}10",
                        "visible": "block",
                        "name": "mygroups"
                    }],
                    "column2": [{
                        "uid": "${refid}11",
                        "visible": "block",
                        "name": "recentmessages"
                    }],
                    "column3": [{
                        "uid": "${refid}12",
                        "visible": "block",
                        "name": "recentchangedcontent"
                    }]
                }
            }
        },
        "${refid}6": {
            "box": "inbox",
            "category": "message",
            "title": "INBOX"
        },
        "${refid}7": {
            "box": "inbox",
            "category": "invitation",
            "title": "INVITATIONS"
        },
        "${refid}8": {
            "box": "outbox",
            "category": "*",
            "title": "SENT"
        },
        "${refid}9": {
            "box": "trash",
            "category": "*",
            "title": "TRASH"
        }
    };

	// this is a test - this should overwrite the exiting config_custom.json
    // Custom CSS Files to load in
    config.skinCSS = ["/dev/skins/default/skin.css", "/dev/skins/rsmart/skin.css"];
    config.displayTimezone = true;
    config.displayLanguage = true;

    // -- Sample config for how to extend TinyMCE --
    // config.Editor.plugins += ',paste';
    // config.Editor.buttons.line_two = 'code,pasteword,pastetext';
    config.Editor.plugins += ',advlink,autolink,contextmenu,directionality,fullscreen,lists,paste,searchreplace,style';
    config.Editor.buttons.line_one = 'bold,italic,underline,strikethrough,sub,sup,|,justifyleft,justifycenter,justifyright,justifyfull,|,formatselect,fontselect,fontsizeselect,|,forecolor,backcolor';
    config.Editor.buttons.line_two = 'undo,redo,|,cut,copy,paste,pastetext,pasteword,removeformat,|,bullist,numlist,outdent,indent,|,blockquote,advhr,charmap,|,link,unlink,anchor,|,search,replace,|,visualaid,fullscreen,styleprops,cleanup,code';
    config.Editor.buttons.line_three = 'tablecontrols,|,ltr,rtl';

    /**
     * Customize the widgets that can be placed in sakaidocs
     *
     * Order matters here, so you can re-arrange however you'd like these
     * widgets to show up
     */
    config.enabledWidgets = [
        "embedcontent",
        "discussion",
        "remotecontent",
        "inlinecontent",
        "sakai2samigo",
        "sakai2forums",
        "sakai2calendar",
        "googlemaps",
        "comments",
        "jisccontent",
        "sakai2assignments",
        "rss",
        "basiclti",
        "ggadget",
        "sakai2gradebook"
    ];

    /**
     * Customize the widgets available to be embedded on the dashboard
     *
     * For now, this is just a copy of the config in config.js
     */
    config.enabledDashboardWidgets = [
        "recentmemberships",
        "mycontent",
        "activegroups",
        "popularcontent",
        "tags",
        "jisccontent",
        "mycontacts",
        "accountpreferences",
        "recentmessages",
        "recentcontactsnew",
        "mygroups",
        "recentchangedcontent"
    ];

    /**
     * Customize the widgets shown by default on a user's dashboard
     * Note that this will only work for new users. Existing users will have
     * to have their /~userid/private/privspace deleted to take changes
     *
     * For now, this is just a copy of the config in config.js
     */
    config.defaultprivstructure["${refid}5"].dashboard.columns =  {
        "column1": [{
            "uid": "${refid}10",
            "visible": "block",
            "name": "recentchangedcontent"
        }],
        "column2": [{
           "uid": "${refid}11",
           "visible": "block",
           "name": "recentmemberships"
       }],
        "column3": [{
             "uid": "${refid}12",
             "visible": "block",
             "name": "recentcontactsnew"
         }]
    };

    /**
    * Change this variable to modify what widget is shown on each user's
    * default dashboard page
    */
    var carouselWidget = 'carousel';

    config.defaultprivstructure["${refid}0"] = {
        "page": "<div class='fl-force-right'><button type='button' class='s3d-button s3d-margin-top-5 s3d-header-button s3d-header-smaller-button dashboard_change_layout' data-tuid='${refid}5'>__MSG__EDIT_LAYOUT__</button><button type='button' class='s3d-button s3d-margin-top-5 s3d-header-button s3d-header-smaller-button dashboard_global_add_widget' data-tuid='${refid}5'>__MSG__ADD_WIDGET__</button></div><div class='s3d-contentpage-title'>__MSG__MY_DASHBOARD__</div><div id='widget_" + carouselWidget + "' class='widget_inline'\></div><br/><div id='widget_dashboard_${refid}5' class='widget_inline'></div>"
    };

    /**
     * Example of overriding the default widget on the top of the user's
     * dashboard with the remotecontent widget
     * The tricky part here is we need to set the data for the widget, which
     * is why the widget is the id + a refid, and there is another refid
     * line below to set the widget's data
     */
    // var carouselWidget = 'remotecontent_${refid}6';
    // config.defaultprivstructure["${refid}0"] = {
    //     "page": "<div class='fl-force-right'><button type='button' class='s3d-button s3d-margin-top-5 s3d-header-button s3d-header-smaller-button dashboard_change_layout' data-tuid='${refid}5'>__MSG__EDIT_LAYOUT__</button><button type='button' class='s3d-button s3d-margin-top-5 s3d-header-button s3d-header-smaller-button dashboard_global_add_widget' data-tuid='${refid}5'>__MSG__ADD_WIDGET__</button></div><div class='s3d-contentpage-title'>__MSG__MY_DASHBOARD__</div><div id='widget_" + carouselWidget + "' class='widget_inline'\></div><br/><div id='widget_dashboard_${refid}5' class='widget_inline'></div>"
    // };
    //
    // config.defaultprivstructure["${refid}6"] = {
    //     "remotecontent": {
    //         "border_color": "ffffff",
    //         "border_size": 0,
    //         "height": "400",
    //         "url": "http://rsmart.com",
    //         "width": "100",
    //         "width_unit": "%"
    //     }
    // };

    /**
     * Explore (landing page) widget configuration
     *
     * Uncomment the lines below to enable the configuration override
     */
    // config.explore = {
    //     oneRow: false,
    //     widgets: {
    //          // oneRowWidget: "welcome",
    //         rightcol: "recentactivity",
    //         main: "welcome",
    //         bottom: "featuredcontent"
    //     }
    // };

    /**
     * Help link
     */
    config.Navigation.push({
        "url": "javascript:;",
        "id": "help_tab",
        "anonymous": true,
        "label": "HELP",
        "rightLink": true
    });

    config.Navigation.push({
        "url": "javascript:;",
        "id": "help_tab",
        "anonymous": false,
        "label": "HELP",
        "rightLink": true
    });

    config.emailLocation = 'accountpreferences';
    config.Profile.configuration.defaultConfig.basic.elements.email.display = false;
    config.emailVerifyEnabled = false;

    /**
     * Kaltura Settings
     */
    config.kaltura = {
        enabled: false, // Enable/disable Kaltura player
        serverURL:  "http://www.kaltura.com", //INSERT_KALTURA_INSTALLATION_URL_HERE
        partnerId:  100, //INSERT_YOUR_PARTNER_ID_HERE
        playerId: 100 //INSERT_YOUR_PLAYER_ID_HERE
    };

    return config;
});

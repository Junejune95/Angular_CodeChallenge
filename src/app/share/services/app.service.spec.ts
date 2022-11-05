import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Book } from 'src/app/core/models/book';
import { environment } from 'src/environments/environment';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        AppService
      ]
    });
    service = TestBed.inject(AppService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });


  it('should have apiUrl in Enviroment', () => {
    expect(environment.apiUrl).toBeDefined();
  });

  it('should get flower books list from the API', () => {
    const dummyapiRes = {
      'totalItems': 2,
      'items': [
        {
          'kind': 'books#volume',
          'id': 'UYNMAAAAMAAJ',
          'etag': 'a/HQv40Nljg',
          'selfLink': 'https://www.googleapis.com/books/v1/volumes/UYNMAAAAMAAJ',
          'volumeInfo': {
            'title': 'Flowers Chronicles',
            'subtitle': 'Studies of Captain John Flower II, 1595-1657, Mariner of London, Bermuda, and Virginia, and Some of His Descendants in the American South',
            'authors': [
              'Pugh Brown Flowers'
            ],
            'publishedDate': '1987',
            'description': 'John Flower II (1595-1657) was a son of John and Katherine Flower of Ratcliffe, England, and was captain of various ships sailing between England, Bermuda, Virginia and Newfoundland. By 1645 he acquired land in Virginia, although he continued as a ship captain and died in England. John Flower (b.1624) and Jacob Flower (b.1635), two sons of John Flower II, emigrated in 1656 from England to the land purchased by their father in what is now Surry County, Virginia. Descendants (chiefly spelling the surname Flowers) and relatives lived in Virginia, North Carolina, Tennessee, South Carolina, Georgia, Florida, Alabama, Texas and elsewhere. Includes some ancestral records and genealogical data in England to ca. 1542.',
            'industryIdentifiers': [
              {
                'type': 'OTHER',
                'identifier': 'WISC:89066140096'
              }
            ],
            'readingModes': {
              'text': false,
              'image': false
            },
            'pageCount': 893,
            'printType': 'BOOK',
            'categories': [
              'North Carolina'
            ],
            'maturityRating': 'NOT_MATURE',
            'allowAnonLogging': false,
            'contentVersion': '0.2.1.0.preview.0',
            'panelizationSummary': {
              'containsEpubBubbles': false,
              'containsImageBubbles': false
            },
            'imageLinks': {
              'smallThumbnail': 'http://books.google.com/books/content?id=UYNMAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
              'thumbnail': 'http://books.google.com/books/content?id=UYNMAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
            },
            'language': 'en',
            'previewLink': 'http://books.google.com/books?id=UYNMAAAAMAAJ&q=flowers&dq=flowers&hl=&cd=1&source=gbs_api',
            'infoLink': 'http://books.google.com/books?id=UYNMAAAAMAAJ&dq=flowers&hl=&source=gbs_api',
            'canonicalVolumeLink': 'https://books.google.com/books/about/Flowers_Chronicles.html?hl=&id=UYNMAAAAMAAJ'
          },
          'saleInfo': {
            'country': 'MM',
            'saleability': 'NOT_FOR_SALE',
            'isEbook': false
          },
          'accessInfo': {
            'country': 'MM',
            'viewability': 'NO_PAGES',
            'embeddable': false,
            'publicDomain': false,
            'textToSpeechPermission': 'ALLOWED',
            'epub': {
              'isAvailable': false
            },
            'pdf': {
              'isAvailable': false
            },
            'webReaderLink': 'http://play.google.com/books/reader?id=UYNMAAAAMAAJ&hl=&source=gbs_api',
            'accessViewStatus': 'NONE',
            'quoteSharingAllowed': false
          },
          'searchInfo': {
            'textSnippet': 'APPENDIX A THE CHRISTOPHER \u003cb\u003eFLOWER\u003c/b\u003e FAMILY OF STEPNEY PARISH AND THE LANCASTER - \u003cb\u003eFLOWER\u003c/b\u003e CONNECTION Christopher \u003cb\u003eFlower\u003c/b\u003e of Ratcliffe, shipwright, married Elizabeth Lancaster on October 10, 1565 at the Church of St. Dunstan in the East,&nbsp;...'
          }
        },
        {
          'kind': 'books#volume',
          'id': 'NtTqAAAAMAAJ',
          'etag': 'YsbbuUxGM+4',
          'selfLink': 'https://www.googleapis.com/books/v1/volumes/NtTqAAAAMAAJ',
          'volumeInfo': {
            'title': 'Flowers and Nature',
            'subtitle': 'Netherlandish Flower Painting of Four Centuries',
            'authors': [
              'Sam Segal'
            ],
            'publisher': 'Seven Hills Books',
            'publishedDate': '1990',
            'industryIdentifiers': [
              {
                'type': 'OTHER',
                'identifier': 'UOM:39015021833861'
              }
            ],
            'readingModes': {
              'text': false,
              'image': false
            },
            'pageCount': 312,
            'printType': 'BOOK',
            'categories': [
              'Art'
            ],
            'maturityRating': 'NOT_MATURE',
            'allowAnonLogging': false,
            'contentVersion': '1.5.2.0.preview.0',
            'panelizationSummary': {
              'containsEpubBubbles': false,
              'containsImageBubbles': false
            },
            'imageLinks': {
              'smallThumbnail': 'http://books.google.com/books/content?id=NtTqAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
              'thumbnail': 'http://books.google.com/books/content?id=NtTqAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
            },
            'language': 'en',
            'previewLink': 'http://books.google.com/books?id=NtTqAAAAMAAJ&q=flowers&dq=flowers&hl=&cd=2&source=gbs_api',
            'infoLink': 'http://books.google.com/books?id=NtTqAAAAMAAJ&dq=flowers&hl=&source=gbs_api',
            'canonicalVolumeLink': 'https://books.google.com/books/about/Flowers_and_Nature.html?hl=&id=NtTqAAAAMAAJ'
          },
          'saleInfo': {
            'country': 'MM',
            'saleability': 'NOT_FOR_SALE',
            'isEbook': false
          },
          'accessInfo': {
            'country': 'MM',
            'viewability': 'NO_PAGES',
            'embeddable': false,
            'publicDomain': false,
            'textToSpeechPermission': 'ALLOWED',
            'epub': {
              'isAvailable': false
            },
            'pdf': {
              'isAvailable': false
            },
            'webReaderLink': 'http://play.google.com/books/reader?id=NtTqAAAAMAAJ&hl=&source=gbs_api',
            'accessViewStatus': 'NONE',
            'quoteSharingAllowed': false
          },
          'searchInfo': {
            'textSnippet': 'Netherlandish \u003cb\u003eFlower\u003c/b\u003e Painting of Four Centuries Sam Segal. flowerings of the prolific stock of Dutch seventeenth - century painting , an art which contemporary opinion regarded as having fallen into a sorry state .'
          }
        }
      ]
    };

    const dummyBooks: Book[] = [
      {
        'id': 'UYNMAAAAMAAJ',
        'title': 'Flowers Chronicles',
        'subtitle': 'Studies of Captain John Flower II, 1595-1657, Mariner of London, Bermuda, and Virginia, and Some of His Descendants in the American South',
        'authors': [
          'Pugh Brown Flowers'
        ],
        'description': 'John Flower II (1595-1657) was a son of John and Katherine Flower of Ratcliffe, England, and was captain of various ships sailing between England, Bermuda, Virginia and Newfoundland. By 1645 he acquired land in Virginia, although he continued as a ship captain and died in England. John Flower (b.1624) and Jacob Flower (b.1635), two sons of John Flower II, emigrated in 1656 from England to the land purchased by their father in what is now Surry County, Virginia. Descendants (chiefly spelling the surname Flowers) and relatives lived in Virginia, North Carolina, Tennessee, South Carolina, Georgia, Florida, Alabama, Texas and elsewhere. Includes some ancestral records and genealogical data in England to ca. 1542.',
        'image': 'http://books.google.com/books/content?id=UYNMAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
      },
      {
        'id': 'NtTqAAAAMAAJ',
        'title': 'Flowers and Nature',
        'subtitle': 'Netherlandish Flower Painting of Four Centuries',
        'authors': [
          'Sam Segal'
        ],
        'description': undefined,
        'image': 'http://books.google.com/books/content?id=NtTqAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
      }
    ];
    service.getBooks('flowers').subscribe((res) => {
      expect(res.length).toBe(2);
      expect(res).toEqual(dummyBooks);
    });

    const req = httpMock.expectOne(`${service.apiUrl}/volumes?q=flowers`);
    console.log(httpMock)
    expect(req.request.method).toBe('GET');

    req.flush(dummyapiRes);

  });

  it('should get history books list from the API', () => {
    const dummyapiRes = {
      'kind': 'books#volumes',
      'totalItems': 2,
      'items': [
        {
          'kind': 'books#volume',
          'id': '2ZMmAQAAIAAJ',
          'etag': 'Xub5GdMlyvU',
          'selfLink': 'https://www.googleapis.com/books/v1/volumes/2ZMmAQAAIAAJ',
          'volumeInfo': {
            'title': 'American History and Culture',
            'publishedDate': '1975',
            'industryIdentifiers': [
              {
                'type': 'OTHER',
                'identifier': 'STANFORD:36105015649002'
              }
            ],
            'readingModes': {
              'text': false,
              'image': false
            },
            'pageCount': 280,
            'printType': 'BOOK',
            'categories': [
              'United States'
            ],
            'maturityRating': 'NOT_MATURE',
            'allowAnonLogging': false,
            'contentVersion': '1.4.3.0.preview.0',
            'panelizationSummary': {
              'containsEpubBubbles': false,
              'containsImageBubbles': false
            },
            'imageLinks': {
              'smallThumbnail': 'http://books.google.com/books/content?id=2ZMmAQAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
              'thumbnail': 'http://books.google.com/books/content?id=2ZMmAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
            },
            'language': 'en',
            'previewLink': 'http://books.google.com/books?id=2ZMmAQAAIAAJ&q=history&dq=history&hl=&cd=1&source=gbs_api',
            'infoLink': 'http://books.google.com/books?id=2ZMmAQAAIAAJ&dq=history&hl=&source=gbs_api',
            'canonicalVolumeLink': 'https://books.google.com/books/about/American_History_and_Culture.html?hl=&id=2ZMmAQAAIAAJ'
          },
          'saleInfo': {
            'country': 'MM',
            'saleability': 'NOT_FOR_SALE',
            'isEbook': false
          },
          'accessInfo': {
            'country': 'MM',
            'viewability': 'NO_PAGES',
            'embeddable': false,
            'publicDomain': false,
            'textToSpeechPermission': 'ALLOWED',
            'epub': {
              'isAvailable': false
            },
            'pdf': {
              'isAvailable': false
            },
            'webReaderLink': 'http://play.google.com/books/reader?id=2ZMmAQAAIAAJ&hl=&source=gbs_api',
            'accessViewStatus': 'NONE',
            'quoteSharingAllowed': false
          },
          'searchInfo': {
            'textSnippet': 'ARTICLE TITLES ( LIST OF PERIODICALS ) \u003cb\u003eHistory\u003c/b\u003e Teacher Huntington Library Quarterly Pennsylvania \u003cb\u003eHistory\u003c/b\u003e 206 Pennsylvania Magazine of \u003cb\u003eHistory\u003c/b\u003e and Biography Phylon Political Science Quarterly 206 Prologue Idaho Yesterdays Indian&nbsp;...'
          }
        },
        {
          'kind': 'books#volume',
          'id': 'bkRIAQAAMAAJ',
          'etag': 'MRKhc1gUDPM',
          'selfLink': 'https://www.googleapis.com/books/v1/volumes/bkRIAQAAMAAJ',
          'volumeInfo': {
            'title': 'History',
            'publishedDate': '1919',
            'industryIdentifiers': [
              {
                'type': 'OTHER',
                'identifier': 'IOWA:31858029863580'
              }
            ],
            'readingModes': {
              'text': false,
              'image': false
            },
            'printType': 'BOOK',
            'categories': [
              'Electronic journals'
            ],
            'maturityRating': 'NOT_MATURE',
            'allowAnonLogging': false,
            'contentVersion': '0.3.3.0.preview.0',
            'panelizationSummary': {
              'containsEpubBubbles': false,
              'containsImageBubbles': false
            },
            'imageLinks': {
              'smallThumbnail': 'http://books.google.com/books/content?id=bkRIAQAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
              'thumbnail': 'http://books.google.com/books/content?id=bkRIAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
            },
            'language': 'en',
            'previewLink': 'http://books.google.com/books?id=bkRIAQAAMAAJ&q=history&dq=history&hl=&cd=2&source=gbs_api',
            'infoLink': 'http://books.google.com/books?id=bkRIAQAAMAAJ&dq=history&hl=&source=gbs_api',
            'canonicalVolumeLink': 'https://books.google.com/books/about/History.html?hl=&id=bkRIAQAAMAAJ'
          },
          'saleInfo': {
            'country': 'MM',
            'saleability': 'NOT_FOR_SALE',
            'isEbook': false
          },
          'accessInfo': {
            'country': 'MM',
            'viewability': 'NO_PAGES',
            'embeddable': false,
            'publicDomain': false,
            'textToSpeechPermission': 'ALLOWED',
            'epub': {
              'isAvailable': false
            },
            'pdf': {
              'isAvailable': false
            },
            'webReaderLink': 'http://play.google.com/books/reader?id=bkRIAQAAMAAJ&hl=&source=gbs_api',
            'accessViewStatus': 'NONE',
            'quoteSharingAllowed': false
          },
          'searchInfo': {
            'textSnippet': 'Adams, G. B., Outline Sketch of English Constitutional \u003cb\u003eHistory\u003c/b\u003e, 187. Altschul, C., The American Revolution in our School Text-books, 123. Anderson, G., and Subedar, M., The Expansion of British India, 1818– 1858, 172.'
          }
        },
      ]
    };

    const dummyBooks: Book[] = [
      {
        'id': '2ZMmAQAAIAAJ',
        'title': 'American History and Culture',
        'image': 'http://books.google.com/books/content?id=2ZMmAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        'description': undefined,
        'subtitle': undefined,
        'authors': undefined
      },
      {
        'id': 'bkRIAQAAMAAJ',
        'title': 'History',
        'subtitle': undefined,
        'description': undefined,
        'image': 'http://books.google.com/books/content?id=bkRIAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        'authors': undefined
      },
    ];
    service.getBooks('history').subscribe((res) => {
      expect(res.length).toBe(2);
      expect(res).toEqual(dummyBooks);
    });

    const req = httpMock.expectOne(`${service.apiUrl}/volumes?q=history`);

    expect(req.request.method).toBe('GET');

    req.flush(dummyapiRes);

  });


});

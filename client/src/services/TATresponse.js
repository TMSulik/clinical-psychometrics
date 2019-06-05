export const responses = [
  {
    pictureNumber: 14,
    response: 'A demigod was executed in the Holy Land over two millennia ago, all according to divine plan. He vowed one day to return to exact his revenge and usher in the End of Time. Gabriel will sound the warning call. \nThe Four Horsemen of the Apocalypse have already mounted their steeds. Global, catastrophic climate change is now upon us. Ted Kazinsky was right. The angel Gabriel has now sounded his claxon. \rThe Son of Man, in all his glory, will descend from the clouds as foretold by the prophets of old. He will sit at the right hand of the Father to judge the quick and the dead. \rWe are now all very, very fearful; we are sore afraid. And reasonably so: where will YOU spend eternity?',
    analysis: [
      {
        entity: 'Gabriel',
        mentions: 2,
        type: 'person',
        overall_sentiment: {
          polarity: "Neutral",
          confidence: 0.66
        }
      },
      {
        entity: 'Apocalypse',
        mentions: 1,
        type: 'organization',
        overall_sentiment: {
          polarity: "Neutral",
          confidence: 0.69
        }
      },
      {
        entity: 'Ted Kazinsky',
        mentions: 1,
        type: 'person',
        overall_sentiment: {
          polarity: "Negative",
          confidence: 0.66
        }
      },
      {
        entity: 'demigod',
        mentions: 1,
        type: 'person',
        overall_sentiment: {
          polarity: "Neutral",
          confidence: 0.6
        },
      },
      {
        entity: 'Son of Man',
        mentions: 1,
        type: 'person',
        overall_sentiment: {
          polarity: "positive",
          confidence: 0.78
        }
      },
      {
        entity: 'climate change',
        mentions: 1,
        type: 'Organization',
        overall_sentiment: {
          polarity: "Nuetral",
          confidence: 0.56
        }
      }
    ]
  },
  {
    pictureNumber: 7,
    response: 'Funes tells Borges of his prodigious memory and adds that he marvels that his feats are considered marvellous. He reveals that, since his fall from the horse, he perceives everything in full detail and remembers it all. He remembers, for example, the shape of clouds at all given moments, as well as the associated perceptions (muscular, thermal, etc.) of each moment. Funes has an immediate intuition of the mane of a horse or the form of a constantly changing flame that is comparable to our (normal people\'s) intuition of a simple geometric shape such as a triangle or square. In order to pass the time, Funes has engaged in such projects as reconstructing a full day\'s worth of past memories (an effort which, he finds, takes him another full day), and constructing a "system of enumeration" that gives each number a different, arbitrary name. Borges correctly points out to him that this is precisely the opposite of a numbering system, but Funes is incapable of such understanding. A poor, ignorant young boy in the outskirts of a small town, he is hopelessly limited in his possibilities, but (says Borges) his absurd projects reveal "a certain stammering greatness". Funes, we are told, is incapable of Platonic ideas, of generalities, of abstraction; his world is one of intolerably uncountable details. He finds it very difficult to sleep, since his mind never stops remembering. Borges spends the whole night talking to Funes in the dark. When dawn reveals Funes\'s face, only 19 years old, Borges sees him as monumental as bronze, more ancient than Egypt, anterior to the prophecies and the pyramids.',
    analysis: [
      {
        entity: 'Funes',
        mentions: 7,
        type: 'Person',
        overall_sentiment: {
          polarity: "positive",
          confidence: 0.78
        }
      },
      {
        entity: 'Borges',
        mentions: 5,
        type: 'Person',
        overall_sentiment: {
          polarity: "Neutral",
          confidence: 0.5
        }
      },
      {
        entity: 'people',
        mentions: 1,
        type: 'Person',
        overall_sentiment: {
          polarity: "Neutral",
          confidence: 0.64
        }
      },
      {
        entity: 'Egypt',
        mentions: 1,
        type: 'Location',
        overall_sentiment: {
          polarity: "Neutral",
          confidence: 0.77
        }
      },
      {
        entity: 'sleep',
        mentions: 1,
        type: 'Organization',
        overall_sentiment: {
          polarity: "Positive",
          confidence: 0.45
        }
      },
      {
        entity: 'geometric shape',
        mentions: 1,
        type: 'Organization',
        overall_sentiment: {
          polarity: "Neutral",
          confidence: 0.46
        }
      }
    ]
  }
];
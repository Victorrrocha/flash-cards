export interface Deck {
    id: string,
    name: string,
    content: CardInfo[]
}

export interface CardInfo {
    front: string, 
    back: string,
    example?: string,
    deck?: string
}

export const FRENCH_VERBS_DECK: Deck = {
    id: '1',
    name: 'Most Common French Verbs',
    content: [
        {
            front: 'Être',
            back: 'to be',
            deck: 'Most Common French Verbs'
        },
        {
            front: 'Avoir',
            back: 'to have',
            deck: 'Most Common French Verbs'
        },
        {
            front: 'Aller',
            back: 'to go',
            deck: 'Most Common French Verbs'
        },
        {
            front: 'Pouvoir',
            back: 'to be able to',
            deck: 'Most Common French Verbs'
        },
        {
            front: 'Faire',
            back: 'to do',
            deck: 'Most Common French Verbs'
        },
        {
            front: 'Parler',
            back: 'to speak',
            deck: 'Most Common French Verbs'
        },
        {
            front: 'Demander',
            back: 'to ask',
            deck: 'Most Common French Verbs'
        },
        {
            front: 'Savoir',
            back: 'to know',
            deck: 'Most Common French Verbs'
        },
        {
            front: 'Venir',
            back: 'to come',
            deck: 'Most Common French Verbs'
        },
        {
            front: 'Dire',
            back: 'to say',
            deck: 'Most Common French Verbs'
        }
    ]
}
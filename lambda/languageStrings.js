/* *
 * We create a language strings object containing all of our strings.
 * The keys for each string will then be referenced in our code, e.g. handlerInput.t('WELCOME_MSG').
 * The localisation interceptor in index.js will automatically choose the strings
 * that match the request's locale.
 * */

module.exports = {
    en: {
        translation: {
            SPACE: 'Space',
            FOOTBALL: 'Football',
            SKILL_NAME: '%s Facts',
            GET_FACT_MESSAGE: 'Here\'s your fact : ',
            GET_FACT_MESSAGE_PERSONALIZED: 'Ok %s, Here\'s your fact : ',
            HELP_MESSAGE: 'You can say tell me a fact, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            FALLBACK_MESSAGE: 'The Facts skill can\'t help you with that.  It can help you discover facts if you say tell me a fact. What can I help you with?',
            FALLBACK_REPROMPT: 'What can I help you with?',
            ERROR_MESSAGE: 'Sorry, an error occurred.',
            PREFERENCE_ERROR: 'Sorry, I am unable to retrieve your personalized identity.',
            STOP_MESSAGE: 'Goodbye!',
            CONFIRMATION_MESSAGE: 'Ok %s, I have added %s as a favorite topic',
            SPACE_FACTS:
                [
                    'A year on Mercury is just 88 days long.',
                    'Despite being farther from the Sun, Venus experiences higher temperatures than Mercury.',
                    'On Mars, the Sun appears about half the size as it does on Earth.',
                    'Jupiter has the shortest day of all the planets.',
                    'The Sun is an almost perfect sphere.',
                ],
            FOOTBALL_FACTS:
                [
                    'Football is the most watched and most played sport on earth.',
                    'The fastest goal ever scored took only 2.4 seconds.',
                    'Only 8 countries have won the World Cup.',
                ],
        }
    },
    ja: {
        translation: {
//            SPACE: 'スペース',
//            FOOTBALL: 'フットボール',            
            SKILL_NAME: '侏儒の言葉・芥川龍之介',
//            GET_FACT_MESSAGE: '知ってましたか？',
//            GET_FACT_MESSAGE_PERSONALIZED: 'わかりました%sここにあなたの事実があります',
//            HELP_MESSAGE: '豆知識を聞きたい時は「豆知識」と、終わりたい時は「おしまい」と言ってください。どうしますか？',
//            HELP_REPROMPT: 'どうしますか？',
            ERROR_MESSAGE: '申し訳ありませんが、エラーが発生しました',
//            PREFERENCE_ERROR: '申し訳ありませんが、個人のIDを取得できません',
//            STOP_MESSAGE: 'さようなら',
//            CONFIRMATION_MESSAGE: 'わかりました%s、お気に入りのトピックとして%sを追加しました',
            SPACE_FACTS:
                [
           '「 しゅじゅの言葉」の序．．．．．「侏儒の言葉」は かならずしもわたしの思想を伝えるものではない。唯わたしの思想の変化を時々｜ うかがわせるのに過ぎぬものである。一本の草よりも一すじの つるくさ、——しかもその蔓草は幾すじも蔓を伸ばしているかも知れない。',
                ],
//            FOOTBALL_FACTS:
//                [
//                    'サッカーは、地球上で最も注目され、最もプレイされているスポーツです',
//                    'これまでに得点した最速のゴールはわずか2.4秒でした',
//                    'ワールドカップで優勝したのは8か国だけです',
//                ],
        }
    }
}

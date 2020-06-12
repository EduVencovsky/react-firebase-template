import React, { useState, ReactNode } from 'react'
import { stringFormat } from '../utils'

import * as languageJson from '../language.json'

const fallBackLanguage = 'en_US'

const browserLanguage = navigator.languages
  ? navigator.languages[0]
  : (navigator.language)

const defaultLanguage = browserLanguage ? browserLanguage.replace('-', '_') : fallBackLanguage

interface ILanguageContext {
  language: string, 
  setLanguage(language: string): void, 
  t(key: string, ...arg: any[]): string,
}

function isKeyof<T extends object>(obj: T, possibleKey: keyof any): possibleKey is keyof T {
  return possibleKey in obj;
}

const LanguageContext = React.createContext<ILanguageContext | null>(null)

interface LanguageProvider {
  children: ReactNode;
}

export function LanguageProvider({ children } : LanguageProvider) {
  const [language, setLanguage] = useState<string>(defaultLanguage)

  const t = (key: string, ...args: any[]) => {
    var result = null
    if(isKeyof(languageJson, key)){
      if(isKeyof(languageJson[key], language)){
        result = languageJson[key][language]
      }
      else if(isKeyof(languageJson[key], fallBackLanguage)){
        result = languageJson[key][fallBackLanguage]
      }
    }

    if(result === null){
      console.warn(`Localization in ${language} with key ${key} not found `)
      return key
    }
    
    return stringFormat(result, ...args)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageContext
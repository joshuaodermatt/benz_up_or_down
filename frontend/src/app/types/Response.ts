export interface Response {
  lighthouseResult: {
    audits: {
      'speed-index': {
        title: string,
        description: string
        score: number,
        displayValue: string
      },
      'modern-image-formats': {
        title: string,
        description: string
        score: number,
        displayValue: string
      },
      'first-meaningful-paint': {
        title: string,
        description: string
        score: number,
        displayValue: string
      },
      'third-party-summary': {
        title: string,
        description: string
        score: number,
        displayValue: string
      },
      'server-response-time': {
        title: string,
        description: string
        score: number,
        displayValue: string
      },
      'bootup-time': {
        title: string,
        description: string
        score: number,
        displayValue: string
      },
      redirects: {
        title: string,
        description: string
        score: number,
        displayValue: string
      }
    }
  }
}

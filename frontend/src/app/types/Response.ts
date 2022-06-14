export interface Response {
  lighthouseResult: {
    audits: {
      'modern-image-formats': {
        score: number
      },
      'first-meaningful-paint': {
        score: number,
        displayValue: string
      },
    }
  }
}

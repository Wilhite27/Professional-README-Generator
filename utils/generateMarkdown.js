function generateMarkdown(data) {
  return `
  # Github Username
  ## ${data.Username},
  
  # Email
  ## ${data.Username}

  # Project Name
  ## ${data.title}

  # Installation Instructions
  ## ${data.install}

  # Languages
  ## ${data.language}

  # License 
  ## ${data.license}

  # Questions
  ## ${data.questions}
  `;
}

module.exports = generateMarkdown;
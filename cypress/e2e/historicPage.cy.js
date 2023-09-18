describe('Page Historic', () => {
    it('Verify Seach Historic', () => {
      cy.visit('http://localhost:3000/home')
  
      // Use cy.get para selecionar o campo de entrada pelo seu seletor
      cy.get('input[name="searchValue"]').type('Vinicius')
  
      // Use cy.contains para selecionar o botão pelo texto
      cy.contains('Search users').click()
  
      // Agora, você pode fazer uma asserção para verificar se a requisição GET foi feita
      cy.request(`https://api.github.com/users/Vinicius`).should((response) => {
        expect(response.status).to.eq(200)
      })

      cy.contains('Historic').click()

      cy.contains('Vinicius').should('exist')

      cy.contains('Search again').click()
    })
  })
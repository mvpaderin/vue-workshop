const pageUrl = 'http://localhost:8081';

describe('Component loads in dev invironment', function() {
    before(function() {
        cy.viewport(1300, 800);
    })

    it('Goto to test page', function() {
        cy.visit(pageUrl)
    })
})


describe('Ruler', function(){
  beforeEach(function() {
    cy.visit(pageUrl)
  })

  it('Opens and closes', function(){
    cy.get('[data-cy=ruler]').should('not.be.visible')

    cy.get('[data-cy=ruler-button]').first().click()

    cy.wait(400)

    cy.get('[data-cy=ruler]').should('be.visible')
    
    cy.get('[data-cy=ruler-button]').first().click()

    cy.wait(400)

    cy.get('[data-cy=ruler]').should('not.be.visible')
  })
})

describe('HomeButton', function() {
  beforeEach(function(){
    cy.visit(pageUrl)
  })

  it('Navigates to the root page', function(){
    cy.get('[data-cy=main-menu-item]').first().click()
    cy.wait(200)

    cy.get('[data-cy=main-menu-item]').should('not.be.visible')

    cy.get('[data-cy=theme-home-button]').click()
    cy.wait(200)
    
    cy.get('[data-cy=main-menu-title]').should('be.visible')
  })
})

describe('SidePanel', function() {
  beforeEach(function() {
    cy.visit(pageUrl)

    cy.get('[data-cy=main-menu-item]').first().click()
  })

  it('Nav Side Panel opens and closes', function() {
    cy.get('[data-cy=side-panel]').should('not.be.visible')

    cy.get('[data-cy=side-panel-switch-nav').click()
    cy.wait(500)

    cy.get('[data-cy=side-panel-nav]').should('be.visible')

    cy.get('[data-cy=side-panel-switch-nav').click()
    cy.wait(500)

    cy.get('[data-cy=side-panel-nav]').should('not.be.visible')
  })

  it('Nav SidePanel automatically closes on root page', function() {
    cy.get('[data-cy=side-panel]').should('not.be.visible')

    cy.get('[data-cy=side-panel-switch-nav').click()
    cy.wait(500)

    cy.get('[data-cy=side-panel-right]').should('not.be.visible')
    cy.get('[data-cy=side-panel-nav]').should('be.visible')

    cy.get('[data-cy=theme-home-button]').click()
    cy.wait(500)

    cy.get('[data-cy=side-panel-right]').should('not.be.visible')
    cy.get('[data-cy=side-panel-nav]').should('not.be.visible')

  })

  it('Right panel opens and closes', function() {
    cy.get('[data-cy=side-panel]').should('not.be.visible')

    cy.get('[data-cy=side-panel-switch-right').click()
    cy.wait(500)

    cy.get('[data-cy=side-panel-right]').should('be.visible')
    cy.get('[data-cy=side-panel-nav]').should('not.be.visible')

    cy.get('[data-cy=side-panel-switch-right').click()
    cy.wait(500)

    cy.get('[data-cy=side-panel-right]').should('not.be.visible')
    cy.get('[data-cy=side-panel-nav]').should('not.be.visible')
  })
})


describe('PageTurner', function(){
  beforeEach(function() {
    cy.visit(pageUrl)
  })

  it('Does not show on the root page', function() {
    cy.get('[data-cy=page-turner-prev]').should('not.be.visible')
    cy.get('[data-cy=page-turner-next]').should('not.be.visible')
  })

  it('Changes pages', function() {
    cy.get('[data-cy=main-menu-item]').first().click()

    cy.get('[data-cy=page-turner-prev]').should('not.be.visible')
    cy.get('[data-cy=page-turner-next]').click()

    cy.get('[data-cy=page-turner-next]').should('not.be.visible')
    cy.get('[data-cy=page-turner-prev]').click()

    cy.get('[data-cy=page-turner-prev]').should('not.be.visible')
  })
})
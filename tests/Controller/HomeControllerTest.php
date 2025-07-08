<?php
namespace App\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class HomeControllerTest extends WebTestCase
{
    public function testIndexPageLoads()
    {
        $client = static::createClient();

        $crawler = $client->request('GET', '/');

        // Assert the response is successful (HTTP 200)
        $this->assertResponseIsSuccessful();

        // Assert that the form exists on the page
        $this->assertSelectorExists('form');

        // Assert that cities variable is passed to the view by checking some element
        // (Assuming your Twig displays cities somewhere, adjust the selector accordingly)
        $this->assertSelectorExists('.city-list'); // example class you might have in your template
    }
}

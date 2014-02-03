<?php

namespace Mindgeek\WebBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('MindgeekWebBundle:Default:index.html.twig', array(
            'user' => array(
                'name' => "user",
                'description' => "This is a description"
            )
        ));
    }

    public function twigTestAction()
    {
        return $this->render('MindgeekWebBundle:Default:twigtest.html.twig', array(
            'user' => array(
                'name' => "user",
                'description' => "This is a description"
            )
        ));
    }

    public function backboneTestAction()
    {
        return $this->render('MindgeekWebBundle:Default:backbonetest.html.twig', array(
            'user' => array(
                'name' => "user",
                'description' => "This is a description"
            )
        ));
    }

    public function QUnitTestAction()
    {
        return $this->render('MindgeekWebBundle:Default:qunittest.html.twig', array(
            'user' => array(
                'name' => "user",
                'description' => "This is a description"
            )
        ));
    }
}

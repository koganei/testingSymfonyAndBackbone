<?php

// src/Mingeek/WebBundle/Twig/LoaderExtension.php
namespace Mindgeek\WebBundle\Twig;

use Symfony\Bundle\TwigBundle\Loader\FilesystemLoader;

/**
 * Adds an extension to the twig path in order to have some twig files public
 */
class LoaderExtension extends \Twig_Extension
{
    public function __construct(FilesystemLoader $loader)
    {

        $this->loader = $loader;
        $this->loader->addPath('bundles/mindgeekweb/views');
    }

    public function getName() {
        return "LoaderExtension";
    }
}
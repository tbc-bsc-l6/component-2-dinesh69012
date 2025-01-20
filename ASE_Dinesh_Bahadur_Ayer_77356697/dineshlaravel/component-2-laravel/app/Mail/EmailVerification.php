<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class EmailVerification extends Mailable
{
    use Queueable, SerializesModels;

    private int $otp;
    private string $name;

    /**
     * Create a new message instance.
     *
     * @param int $otp
     * @param string $name
     */
    public function __construct(int $otp, string $name)
    {
        $this->otp = $otp;
        $this->name = $name;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('Email Verification')
            ->view('verifyEmail') // Blade view file to use for email content
            ->with([
                'otp' => $this->otp,
                'name' => $this->name,
            ]);
    }
}

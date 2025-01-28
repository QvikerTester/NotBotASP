using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NotBot2.Models;

namespace NotBot2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CardPaymentDetailController : ControllerBase
    {
        private readonly CardPaymentDetailContext _context;

        public CardPaymentDetailController(CardPaymentDetailContext context)
        {
            _context = context;
        }

        // GET: api/CardPaymentDetail
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CardPaymentDetail>>> GetCardPaymentDetails()
        {
            return await _context.CardPaymentDetails.ToListAsync();
        }

        // GET: api/CardPaymentDetail/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CardPaymentDetail>> GetCardPaymentDetail(int id)
        {
            var cardPaymentDetail = await _context.CardPaymentDetails.FindAsync(id);

            if (cardPaymentDetail == null)
            {
                return NotFound();
            }

            return cardPaymentDetail;
        }

        // PUT: api/CardPaymentDetail/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCardPaymentDetail(int id, CardPaymentDetail cardPaymentDetail)
        {
            if (id != cardPaymentDetail.PaymentID)
            {
                return BadRequest();
            }

            _context.Entry(cardPaymentDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CardPaymentDetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/CardPaymentDetail
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<CardPaymentDetail>> PostCardPaymentDetail(CardPaymentDetail cardPaymentDetail)
        {
            _context.CardPaymentDetails.Add(cardPaymentDetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCardPaymentDetail", new { id = cardPaymentDetail.PaymentID }, cardPaymentDetail);
        }

        // DELETE: api/CardPaymentDetail/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCardPaymentDetail(int id)
        {
            var cardPaymentDetail = await _context.CardPaymentDetails.FindAsync(id);
            if (cardPaymentDetail == null)
            {
                return NotFound();
            }

            _context.CardPaymentDetails.Remove(cardPaymentDetail);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CardPaymentDetailExists(int id)
        {
            return _context.CardPaymentDetails.Any(e => e.PaymentID == id);
        }
    }
}
